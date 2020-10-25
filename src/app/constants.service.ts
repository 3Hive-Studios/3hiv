import { Injectable } from '@angular/core';
import BigNumber from 'bignumber.js';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  PRECISION = 1e18;
  YFB_ADDRESS = '0x89ee58af4871b474c30001982c3d7439c933c838';
  STAKER_ADDRESS = '0xC5802bCf619301Bdc6B1B9EDA4B6fd26e63339aF';
  MON_ADDRESS = '0xAf488234796CA27DBa8ECF17f803Ea1f4Ab33E15';
  DAI_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f';
  S3_URL = 'https://d3h0sbhg72k3qr.cloudfront.net/';
  API_URL = 'https://yflambda.herokuapp.com/mons/';
}