import { Injectable } from '@nestjs/common';
import { usersSeed } from './data/users.seeds';
import { writeFile, readFile } from 'fs';
import path from 'path';

@Injectable()
export class SeedsService {
  addSeeds() {
    writeFile(
      './data.json',
      JSON.stringify(usersSeed),
        err => {
          if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
      }
    )

    readFile(
      './data.json',
      "utf8", 
      (err, jsonString) => {
      if (err) {
        console.log("File read failed:", err);
        return;
      }
      console.log("File data:", jsonString);
    });
    
  }

  
}
