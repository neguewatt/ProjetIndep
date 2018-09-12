import { ButtonSwitchModule } from './button-switch.module';

describe('ButtonSwitchModule', () => {
  let buttonSwitchModule: ButtonSwitchModule;

  beforeEach(() => {
    buttonSwitchModule = new ButtonSwitchModule();
  });

  it('should create an instance', () => {
    expect(buttonSwitchModule).toBeTruthy();
  });
});
