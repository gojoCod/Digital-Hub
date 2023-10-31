import dayjs, { Dayjs } from "dayjs";

export type YSIFRow = {
  startDate?: Dayjs[];
  endDate?: string[];
  inventorySource?: string[];
  impressions?: number[];
  CPM?: number[];
  cost?: number[];
  exclusions?: string[];
  desiredBudget?: number;
  impressionTotal?: number;
  CPMTotal?: number;
  costTotal?: number;
  [key: string]: any;
};
export const YSIF: YSIFRow[] = [
  {
    startDate: [
      dayjs("5/12/2023"),
      dayjs("5/12/2023"),
      dayjs("5/12/2023"),
      dayjs("5/12/2023"),
      dayjs("5/12/2023"),
      dayjs("5/12/2023"),
    ] as Dayjs[],
  },
  {
    endDate: [
      "12/23/23",
      "12/23/23",
      "12/23/23",
      "12/23/23",
      "12/23/23",
      "12/23/23",
    ],
  },
  {
    inventorySource: [
      "woohoo",
      "woohoo",
      "Freewheel-O&O/Affiliate/Direct",
      "Freewheel-O&O/Affiliate/Direct",
      "Freewheel-O&O/Affiliate/Direct",
      "Freewheel-O&O/Affiliate/Direct",
    ],
  },
  { impressions: [16075, 16075, 16075, 16075, 16075, 16075] },
  { CPM: [4.18, 4.18, 4.18, 4.18, 4.18, 4.18] },
  {
    cost: [66176.68, 66176.68, 66176.68, 66176.68, 66176.68, 66176.68],
  },
  { exclusions: ["None", "None", "None", "None", "None", "None"] },
  { desiredBudget: 66176.68 },
  { impressionTotal: 160715 },
  { CPMTotal: 41.18 },
  { costTotal: 6617.68 },
];

// function total(arr: number[]): number {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     res += arr[i];
//   }
//   return res;
// }
