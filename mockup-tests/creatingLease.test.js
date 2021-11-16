// const _axios = require("../shared/service");

// let newLease = {
//   address: "1345 Keeling Alley",
//   unit: "232",
//   tenants: [
//     {
//       fullname: "ben Carter",
//       email: "Gudrun.Wehner@hotmail.com",
//       phoneNumber: 544970183,
//     },
//   ],
// };

// // test("Test: Creating Custom Lease", async () => {
// //   let returnValue = await _axios.post("/leases/", newLease);
// //   let id = returnValue.data.id;
// //   delete returnValue.data.id;
// //   // creating lease
// //   expect(returnValue.data).toEqual(newLease);
// //   let getLeaseById = await _axios.get(`/leases/${id}`);
// //   delete getLeaseById.data.id;
// //   // getting lease by id
// //   expect(getLeaseById.data).toEqual(newLease);
// // });

// // test("Test: Creating Empty Lease", async () => {
// //   const result = await _axios.post("/leases/");
// //   expect(result.status).toBe(400);
// // });

// // /**
// //  * Types Checks of all Lease Schema Object
// //  */
// test("Test: Creating Bad Type Address Lease", async () => {
//   const copyLease = { ...newLease, ...{ address: 12312 } }; // random number (instead of string)
//   const result = await _axios.post("/leases/", copyLease);
//   expect(result.status).toBe(400);
// });

// test("Test: Creating Bad Type Unit Lease", async () => {
//   const copyLease = { ...newLease, ...{ unit: 33333 } }; // random number (instead of string)
//   const result = await _axios.post("/leases/", copyLease);
//   expect(result.status).toBe(400);
// });

// test("Test: Creating Bad Type Tenants Phone Lease", async () => {
//   const copyLease = {
//     ...newLease,
//     ...{
//       tenants: [{ ...newLease.tenants[0], ...{ phone: "not a number" } }],
//     },
//   }; // string instead of number
//   const result = await _axios.post("/leases/", copyLease);
//   expect(result.status).toBe(400);
// });

// test("Test: Creating Bad Type Tenants Fullname Lease", async () => {
//   const copyLease = {
//     ...newLease,
//     ...{
//       tenants: [{ ...newLease.tenants[0], ...{ fullname: false } }],
//     },
//   }; // random number (instead of string)
//   const result = await _axios.post("/leases/", copyLease);
//   expect(result.status).toBe(400);
// });

// test("Test: Creating Bad Type Tenants Email Lease", async () => {
//   const copyLease = {
//     ...newLease,
//     ...{
//       tenants: [{ ...newLease.tenants[0], ...{ email: true } }],
//     },
//   }; // random number (instead of string)
//   const result = await _axios.post("/leases/", copyLease);
//   expect(result.status).toBe(400);
// });
// test("Test: Creating Lease With Invalid Email Pattern Lease", async () => {
//   const copyLease = {
//     ...newLease,
//     ...{
//       tenants: [{ ...newLease.tenants[0], ...{ email: "bad pattern @email" } }],
//     },
//   }; // random number (instead of string)
//   const result = await _axios.post("/leases/", copyLease);
//   console.log(
//     "🚀 ~ file: creatingLease.test.js ~ line 84 ~ test ~ copyLease",
//     result
//   );
//   expect(result.status).toBe(400);
// });
