import { FacturesModule } from './factures.module';

describe('FacturesModule', () => {
  let facturesModule: FacturesModule;

  beforeEach(() => {
    facturesModule = new FacturesModule();
  });

  it('should create an instance', () => {
    expect(facturesModule).toBeTruthy();
  });
});
