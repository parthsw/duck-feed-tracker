export interface DuckFeedModel {
  duckFeedId: number;
  foodTypeId: number;
  foodDescription: string;
  foodQtyGms: number;
  noOfDucks: number;
  countryId: string;
  feedTime: string;
  feedDate: string;
  parkLocation: string;
  isRepetitive: boolean;
  participantName: string;
  participantEmail: string;
}
