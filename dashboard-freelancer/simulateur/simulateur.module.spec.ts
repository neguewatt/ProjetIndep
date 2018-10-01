import { SimulateurModule } from './simulateur.module';

describe('SimulateurModule', () => {
  let simulateurModule: SimulateurModule;

  beforeEach(() => {
    simulateurModule = new SimulateurModule();
  });

  it('should create an instance', () => {
    expect(simulateurModule).toBeTruthy();
  });
});
