const { _axios } = require("../shared/service");

let { validLease } = require("../shared/service");

test("Test: Deleting Existing Lease", async () => {
  const result = await _axios.post("/leases", validLease);
  let toBeDeleted = result.data;
  const deleteLease = await _axios.delete(`/leases/${toBeDeleted.id}`);
  try {
    const getDeleted = await _axios.get(`/leases/${toBeDeleted.id}`);
    expect(getDeleted.status).toBe(404); // if arrived here there is a bug
  } catch (err) {
    expect(err.response.status).toBe(404);
  }
  expect(deleteLease.status).toBe(200);
  expect(deleteLease.data).toEqual(toBeDeleted);
});
