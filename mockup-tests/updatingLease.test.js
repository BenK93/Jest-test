const { _axios } = require("../shared/service");

let { validLease } = require("../shared/service");

test("Test: Updating Existing Lease", async () => {
  const result = await _axios.post("/leases", validLease);
  let created = result.data;
  created.address = "NeverLand";
  const updatedLease = await _axios.put(`/leases/${created.id}`, created);
  expect(updatedLease.status).toBe(200);
  expect(updatedLease.data).toEqual(created);
});
