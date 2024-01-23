export interface CarItem {
  model: number;
  owner: string;
  kms: number;
}

export interface CarState {
  carsList: [CarItem];
}
