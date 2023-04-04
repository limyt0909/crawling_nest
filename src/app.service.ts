import { Injectable } from '@nestjs/common';

@Injectable()
export class scrapService {
  /**
 * @param any - Scrapping Route for nest JS 
 * @returns 
 */
  getScrape(): object {
    return { success: true, message: "Scarpping Success", data: { "SN": 1 } }
  }
}

@Injectable()
export class AppService {
  /**
   * @param default - default Route for nest JS  
   * @returns 
   */
  getHello(): string {
    return 'Nest for 용택';
  }
}

