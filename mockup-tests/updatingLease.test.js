const { _axios } = require("../shared/service");

let { validLease } = require("../shared/service");

// Getting an existing lease from all lease and updating it
test("Test: Updating Existing Lease", async () => {
  const result = await _axios.post("/leases", validLease);
  let created = result.data;
  created.address = "NeverLand";
  const updatedLease = await _axios.put(`/leases/${created.id}`, created);
  expect(updatedLease.status).toBe(200);
  expect(updatedLease.data).toEqual(created);
});

// Invalid ID given as parameter
test("Test: Updating None Existing Lease", async () => {
  let invalidID = -10;
  try {
    const updatedLease = await _axios.put(`/leases/${invalidID}`, {});
    expect(updatedLease.status).toBe(404); // if arrived here there is a bug
  } catch (err) {
    expect(err.response.status).toBe(404);
  }
});

// Invalid unit type (boolean instead of a string)
test("Test: Updating Not valid unit", async () => {
  const result = await _axios.post("/leases", validLease);
  try {
    let toBeUpdated = result.data;
    toBeUpdated.unit = true; // invalid type
    const updatedLease = await _axios.put(
      `/leases/${result.data.id}`,
      toBeUpdated
    );
    expect(updatedLease.status).toBe(400); // if arrived here there is a bug
  } catch (err) {
    expect(err.response.status).toBe(400);
  }
});

// Invalid Adress type (float instead of a string)
test("Test: Updating Not valid Address", async () => {
  const result = await _axios.post("/leases", validLease);
  try {
    let toBeUpdated = result.data;
    toBeUpdated.address = 1.123; // invalid type
    const updatedLease = await _axios.put(
      `/leases/${result.data.id}`,
      toBeUpdated
    );
    expect(updatedLease.status).toBe(400); // if arrived here there is a bug
  } catch (err) {
    expect(err.response.status).toBe(400);
  }
});
// Invalid Tenants prop
test("Test: Updating Not valid Tenants", async () => {
  const result = await _axios.post("/leases", validLease);
  try {
    let toBeUpdated = result.data;
    toBeUpdated.tenants = ["this", "is", "not", "valid"]; // invalid type
    const updatedLease = await _axios.put(
      `/leases/${result.data.id}`,
      toBeUpdated
    );
    expect(updatedLease.status).toBe(400); // if arrived here there is a bug
  } catch (err) {
    expect(err.response.status).toBe(400);
  }
});
test("Test: Updating Not valid Tenants Email", async () => {
  const result = await _axios.post("/leases", validLease);
  try {
    let toBeUpdated = result.data;
    toBeUpdated = {
      ...toBeUpdated,
      ...{
        tenants: [
          { ...toBeUpdated.tenants[0], ...{ email: "bad pattern @email" } },
        ],
      },
    }; // invalid type
    const updatedLease = await _axios.put(
      `/leases/${result.data.id}`,
      toBeUpdated
    );
    expect(updatedLease.status).toBe(400); // if arrived here there is a bug
  } catch (err) {
    expect(err.response.status).toBe(400);
  }
});
