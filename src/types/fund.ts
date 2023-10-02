export type FundResp = {
  avg_return: number;
  mstar_id: string;
  nav: number;
  nav_date: Date;
  nav_return: number;
  thailand_fund_code: string;
};

export type GetFundsReq = {
  startDate?: string;
  endDate?: string;
  pagination: {
    page: number;
    rowPerPage: number;
  };
};
