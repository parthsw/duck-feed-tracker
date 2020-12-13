export interface IDuckFeed {
  duckFeedId: number;
  foodTypeId: number;
  foodDescription: string;
  foodQtyGms: number;
  noOfDucks: number;
  countryId: string;
  feedTime: string;
  feedDate: Date;
  parkLocation: string;
  isRepetitive: boolean;
  participantName: string;
  participantEmail: string;
}
