import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ModelEurl} from "../Model.eurl";
import "rxjs/add/operator/debounceTime";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'ngx-eurl',
  templateUrl: './eurl.component.html',
  styleUrls: ['./eurl.component.scss']
})
export class EurlComponent implements OnInit {

  simulatorForm: FormGroup;
  model: ModelEurl;
  subscription: Subscription;


  constructor(private fb: FormBuilder) {
	    this.simulatorForm = fb.group({
	            dailyRevenue: 400,
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

        let newModelEurl: ModelEurl = new ModelEurl();

        let params = this.simulatorForm.value;

        // Revenues
        newModelEurl.dailyRevenue = params.dailyRevenue;
        newModelEurl.daysPerMonth = params.daysPerMonth;
        newModelEurl.annualRevenueFromRegularMonthlyRevenue = params.dailyRevenue * params.daysPerMonth * 12;
        newModelEurl.otherMonthlyRevenue = params.otherMonthlyRevenue;
        newModelEurl.annualRevenueFromOtherMonthlyRevenue = params.otherMonthlyRevenue * 12;
        newModelEurl.otherAnnualRevenue = params.otherAnnualRevenue;
        newModelEurl.totalAnnualRevenue = newModelEurl.annualRevenueFromRegularMonthlyRevenue + newModelEurl.annualRevenueFromOtherMonthlyRevenue + params.otherAnnualRevenue;

        // Fees
        newModelEurl.monthlyFees = params.monthlyFees;
        newModelEurl.annualFeesFromMonthlyFees = params.monthlyFees * 12;
        newModelEurl.annualFees = params.annualFees;
        newModelEurl.totalAnnualFees = (params.monthlyFees * 12) + params.annualFees;

        // Salary
        newModelEurl.monthlyGrossSalary = params.monthlyGrossSalary;
        newModelEurl.annualGrossSalary = (params.monthlyGrossSalary * 12);
        newModelEurl.annualGrossBonus = params.annualBonus;
        newModelEurl.totalAnnualGrossSalary = newModelEurl.annualGrossSalary + newModelEurl.annualGrossBonus;
/*        newModelEurl.annualSuperGrossSalary = newModelEurl.totalAnnualGrossSalary + newModelEurl.employerSalaryTax;
        newModelEurl.annualNetSalary = newModelEurl.totalAnnualGrossSalary - newModelEurl.employeeSalaryTax;*/
        newModelEurl.employerSalaryTax = Math.round(newModelEurl.totalAnnualGrossSalary / 1.47);
        newModelEurl.employeeSalaryTax = Math.round(newModelEurl.annualNetSalary * 0.47);
        newModelEurl.annualNetSalary = newModelEurl.employerSalaryTax - newModelEurl.employeeSalaryTax;

        // Spendings
        newModelEurl.totalAnnualSpendings = newModelEurl.totalAnnualFees + newModelEurl.annualSuperGrossSalary;

        // Profit
        newModelEurl.grossProfit = newModelEurl.totalAnnualRevenue - newModelEurl.totalAnnualSpendings;
        newModelEurl.profitTax = Math.max(0, Math.round(Math.min(newModelEurl.grossProfit, 38000) * 0.15) + Math.round(Math.max(newModelEurl.grossProfit - 38000, 0) * 0.28));
        newModelEurl.netProfit = newModelEurl.grossProfit - newModelEurl.profitTax;

        // Dividends
        newModelEurl.dividendsPercentage = params.dividendsPercentage;
        newModelEurl.grossDividends = Math.max(0, Math.round(newModelEurl.netProfit * newModelEurl.dividendsPercentage / 100));
        newModelEurl.dividendsTax = Math.round(newModelEurl.grossDividends * 0.172);
        newModelEurl.netDividends = newModelEurl.grossDividends - newModelEurl.dividendsTax;
        newModelEurl.investment = newModelEurl.netProfit - newModelEurl.grossDividends;

        // Shares
        newModelEurl.totalFreelanceShare = newModelEurl.annualNetSalary + newModelEurl.netDividends;
        newModelEurl.totalCompanyShare = newModelEurl.investment;
        newModelEurl.totalStateShare = newModelEurl.employerSalaryTax + newModelEurl.employeeSalaryTax + newModelEurl.profitTax + newModelEurl.dividendsTax;

        this.model = newModelEurl;
    }

}
