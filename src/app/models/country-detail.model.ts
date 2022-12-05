export interface CountryDetailModel {
  readonly name: string;
  readonly country: {
    country_id: string;
    probability: number;
  }[]
}

