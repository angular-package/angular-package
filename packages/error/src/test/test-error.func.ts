

export const testError = (value: any, check: any) => {

  expect(value.fix).toEqual(check.fix);
  expect(value.id).toEqual(check.id);
  expect(value.link).toEqual(check.link);
  expect(value.max).toEqual(check.max);
  expect(value.min).toEqual(check.min);
  expect(value.name).toEqual(check.name);
  expect(value.problem).toEqual(check.problem);
  expect(value.range).toEqual(check.range);
  expect(value.message).toEqual(check.message);
  expect(value.template).toEqual(check.template);
  expect(value.type).toEqual(check.type);

};
