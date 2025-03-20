export type SettingsValueProps = {
    theme: 'light' | 'dark' | 'system';
    enableSystem: boolean;
    language: 'fa' | 'en';
    themeStretch: boolean;
    themeDirection: 'rtl' | 'ltr';
    themeContrast: 'default' | 'bold';
    themeLayout: 'vertical' | 'horizontal' | 'mini';
    themeColorPresets: 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red';
  };
  
  export type SettingsContextProps = {
    settings: SettingsValueProps;
    onUpdate: <T extends keyof SettingsValueProps>(name: T, value: SettingsValueProps[T]) => void;
    onChangeDirectionByLang: () => void;
  };
  