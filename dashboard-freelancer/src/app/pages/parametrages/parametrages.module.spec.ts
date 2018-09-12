import { ParametragesModule } from './parametrages.module';

describe('ParametragesModule', () => {
  let parametragesModule: ParametragesModule;

  beforeEach(() => {
    parametragesModule = new ParametragesModule();
  });

  it('should create an instance', () => {
    expect(parametragesModule).toBeTruthy();
  });
});
