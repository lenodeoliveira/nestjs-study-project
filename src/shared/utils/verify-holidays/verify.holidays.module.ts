// import { Module } from "@nestjs/common";
// import { VerifyHoliDaysDefinition } from "./definition";
// import { DateHoliDay } from "./DateHoliDay";

// @Module({
//     imports: [],
//     providers: [
//         {
//             provide: VerifyHoliDaysDefinition.IMPLEMENTATION,
//             useClass: DateHoliDay
//         }
//     ],
//     exports: [{
//         {
//             provide: VerifyHoliDaysDefinition.IMPLEMENTATION,
//             useClass: DateHoliDay
//         }
//     }]
// });

// export class VerifyHoliDaysModule {}

// @Module({
//     imports: [
//       HttpModule.register({
//         timeout: 5000,
//         maxRedirects: 5,
//       }),
//     ],
//     providers: [
//       {
//         provide: 'StarWarsAPIProviderModule',
//         useClass: StarWarsAPIProviderModule,
//       },
//     ],
//     exports: [
//       {
//         provide: 'StarWarsAPIProviderModule',
//         useClass: StarWarsAPIProviderModule,
//       },
//     ],
//   })
//   export class StarWarsAPIModule {}
