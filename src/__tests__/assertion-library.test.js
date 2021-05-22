import  {sum, subtract}  from '../math'

let result, expected

result = sum(3, 7)
expected = 10


result = subtract(7, 3)
expected = 4


/**
 * how test work
 * @param  actual 
 * @returns 
 */
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}

test('fetches stories from an API and fails', async () => {
    expect(result).toBe(expected)
  });
