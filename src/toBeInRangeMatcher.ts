/* eslint-env jest */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare namespace jest {
  interface Matchers<R> {
    toBeInRange(range: { min: number; max: number }): R;
  }
}

function toBeInRange(
  received: number,
  { min, max }: { min: number; max: number },
) {
  const pass = received >= min && received <= max;
  if (pass) {
    return {
      message: () => `expected ${received} < ${min} or ${max} < ${received}`,
      pass: true,
    };
  }
  return {
    message: () => `expected ${min} >= ${received} >= ${max}`,
    pass: false,
  };
}

expect.extend({ toBeInRange });
