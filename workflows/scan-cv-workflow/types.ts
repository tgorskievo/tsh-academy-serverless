export interface ScanCvEvent {
  key: string;
  extension: string;
  nodeExperience?: number;
  cloudExperience?: number;
  itExperience?: number;
  isExcluded?: boolean;
}

export interface ScanCvScoreEvent {
  calculatedScore: number;
  key: string;
  copySource: string;
  matchedFilesBucketName: string;
  rejectedFilesBucketName: string;
}
