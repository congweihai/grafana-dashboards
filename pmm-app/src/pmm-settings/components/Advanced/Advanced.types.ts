import { LoadingCallback } from 'pmm-settings/Settings.service';

export interface AdvancedProps {
  dataRetention: string;
  telemetryEnabled: boolean;
  sttEnabled: boolean;
  updatesDisabled: boolean;
  dbaasEnabled?: boolean;
  publicAddress?: string;
  updateSettings: (body: any, callback: LoadingCallback) => void;
}
