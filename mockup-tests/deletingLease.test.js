const { _axios } = require("../shared/service");

let { validLease } = require("../shared/service");

// Getting an existing lease from all lease and Deleting it
test("Test: Deleting Existing Lease", async () => {
  const result = await _axios.get("/leases");
  let toBeDeleted = result.data.items[0];
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

test("Test: Creating & Deleting Lease", async () => {
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

test("Test: Deleting None existing Lease", async () => {
  let invalidID = -10;
  try {
    const deleteLease = await _axios.delete(`/leases/${invalidID}`);
    expect(deleteLease.status).toBe(404); // if arrived here there is a bug
  } catch (err) {
    expect(err.response.status).toBe(404);
  }
});
