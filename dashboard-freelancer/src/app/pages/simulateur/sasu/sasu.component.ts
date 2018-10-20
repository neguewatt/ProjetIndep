import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ModelSasu} from "../Model.sasu";
import "rxjs/add/operator/debounceTime";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'ngx-sasu',
  templateUrl: './sasu.component.html',
  styleUrls: ['./sasu.component.scss']
})
export class SasuComponent implements OnInit {

  simulatorForm: FormGroup;
  model: ModelSasu;
  subscription: Subscription;

constructor(private fb: FormBuilder) {
    this.simulatorForm = fb.group({
        dailyRevenue: 420,
        daysPerMonth: 18,
        otherMonthlyRevenue: 0,
        otherAnnualRevenue: 0,
        monthlyFees: 500,
        annualFees: 2000,
        monthlyGrossSalary: 3000,
        annualBonus: 0,
        dividendsPercentage: 0
    });
}

    ngOnInit() {
        this.subscription = this.simulatorForm.valueChanges.debounceTime(50).subscribe(() => this.simulate());
        this.simulate();
    }


    simulate(): void {

        let newModelSasu: ModelSasu = new ModelSasu();

        let params = this.simulatorForm.value;

        // Revenues
        newModelSasu.dailyRevenue = params.dailyRevenue;
        newModelSasu.daysPerMonth = params.daysPerMonth;
        newModelSasu.annualRevenueFromRegularMonthlyRevenue = params.dailyRevenue * params.daysPerMonth * 12;
        newModelSasu.otherMonthlyRevenue = params.otherMonthlyRevenue;
        newModelSasu.annualRevenueFromOtherMonthlyRevenue = params.otherMonthlyRevenue * 12;
        newModelSasu.otherAnnualRevenue = params.otherAnnualRevenue;
        newModelSasu.totalAnnualRevenue = newModelSasu.annualRevenueFromRegularMonthlyRevenue + newModelSasu.annualRevenueFromOtherMonthlyRevenue + params.otherAnnualRevenue;

        // Fees
        newModelSasu.monthlyFees = params.monthlyFees;
        newModelSasu.annualFeesFromMonthlyFees = params.monthlyFees * 12;
        newModelSasu.annualFees = params.annualFees;
        newModelSasu.totalAnnualFees = (params.monthlyFees * 12) + params.annualFees;

        // Salary
        newModelSasu.monthlyGrossSalary = params.monthlyGrossSalary;
        newModelSasu.annualGrossSalary = (params.monthlyGrossSalary * 12);
        newModelSasu.annualGrossBonus = params.annualBonus;
        newModelSasu.totalAnnualGrossSalary = newModelSasu.annualGrossSalary + newModelSasu.annualGrossBonus;
        newModelSasu.employerSalaryTax = Math.round(newModelSasu.totalAnnualGrossSalary * 0.42);
        newModelSasu.employeeSalaryTax = Math.round(newModelSasu.totalAnnualGrossSalary * 0.25);
        newModelSasu.annualSuperGrossSalary = newModelSasu.totalAnnualGrossSalary + newModelSasu.employerSalaryTax;
        newModelSasu.annualNetSalary = newModelSasu.totalAnnualGrossSalary - newModelSasu.employeeSalaryTax;

        // Spendings
        newModelSasu.totalAnnualSpendings = newModelSasu.totalAnnualFees + newModelSasu.annualSuperGrossSalary;

        // Profit
        newModelSasu.grossProfit = newModelSasu.totalAnnualRevenue - newModelSasu.totalAnnualSpendings;
        newModelSasu.profitTax = Math.max(0, Math.round(Math.min(newModelSasu.grossProfit, 38000) * 0.15) + Math.round(Math.max(newModelSasu.grossProfit - 38000, 0) * 0.28));
        newModelSasu.netProfit = newModelSasu.grossProfit - newModelSasu.profitTax;

        // Dividends
        newModelSasu.dividendsPercentage = params.dividendsPercentage;
        newModelSasu.grossDividends = Math.max(0, Math.round(newModelSasu.netProfit * newModelSasu.dividendsPercentage / 100));
        newModelSasu.dividendsTax = Math.round(newModelSasu.grossDividends * 0.172);
        newModelSasu.netDividends = newModelSasu.grossDividends - newModelSasu.dividendsTax;
        newModelSasu.investment = newModelSasu.netProfit - newModelSasu.grossDividends;

        // Shares
        newModelSasu.totalFreelanceShare = newModelSasu.annualNetSalary + newModelSasu.netDividends;
        newModelSasu.totalCompanyShare = newModelSasu.investment;
        newModelSasu.totalStateShare = newModelSasu.employerSalaryTax + newModelSasu.employeeSalaryTax + newModelSasu.profitTax + newModelSasu.dividendsTax;

        this.model = newModelSasu;
    }

}
