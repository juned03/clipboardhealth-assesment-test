const { deterministicPartitionKey } = require("./dpk");

const KEY_LENGTH_LARGER_THAN_MAX_PARITION_KEY_LENGTH =
  "d45f7b7c5868a76434aea354ba13908ab960a360fd1b8c219bbddbe795aa40def3eeca353da82819a94fdb1689d9cfa1d305a3af1de9cf1aee958b5b6ef26e73d45f7b7c5868a76434aea354ba13908ab960a360fd1b8c219bbddbe795aa40def3eeca353da82819a94fdb1689d9cfa1d305a3af1de9cf1aee958b5b6ef26e73d45f7b7c5868a76434aea354ba13908ab960a360fd1b8c219bbddbe795aa40def3eeca353da82819a94fdb1689d9cfa1d305a3af1de9cf1aee958b5b6ef26e73";

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal hash-key when given event is string", () => {
    const trivialKey = deterministicPartitionKey("test-key");
    expect(trivialKey).toBe(
      "d45f7b7c5868a76434aea354ba13908ab960a360fd1b8c219bbddbe795aa40def3eeca353da82819a94fdb1689d9cfa1d305a3af1de9cf1aee958b5b6ef26e73"
    );
  });

  it("Returns the literal same key when given event is greater than max partition key length", () => {
    const trivialKey = deterministicPartitionKey(
      KEY_LENGTH_LARGER_THAN_MAX_PARITION_KEY_LENGTH
    );
    expect(trivialKey).toBe(
      "cfb328f17c74b68fc5c4f6b3edcfa52061e3341e4f0d6f912282fa6d1c175bcad3fed1516a25da83f2fcbb613471127cad5a628626ecfe65cf41a1abd1692ffe"
    );
  });

  it("Returns the literal same key when given event has partitionKey", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "test-key" });
    expect(trivialKey).toBe("test-key");
  });

  it("Returns the literal same key when given event has partitionKey greater than max partition key length", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: KEY_LENGTH_LARGER_THAN_MAX_PARITION_KEY_LENGTH,
    });
    expect(trivialKey).toBe(
      "0116e865537a972c8df807686b00a9b7d515988747535241ffb5eea0cc6555043b9ffc2daa24338600417243ba1829abdeed79bc089c815527816ee02124ad16"
    );
  });
});
