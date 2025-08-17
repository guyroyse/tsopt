import Optional from '$lib/optional'

describe('Optional', () => {
  let maybeNumber: Optional<number>

  describe('#of', () => {
    when('called with a value', () => {
      beforeEach(() => (maybeNumber = Optional.of(42)))

      test('#isPresent returns true', () => expect(maybeNumber.isPresent()).toBeTrue())
      test('#isEmpty returns false', () => expect(maybeNumber.isEmpty()).toBeFalse())
      test('#get returns the value', () => expect(maybeNumber.get()).toBe(42))
      test('#orElse returns the value', () => expect(maybeNumber.orElse(23)).toBe(42))
      test('#orElseThrow returns the value', () => expect(maybeNumber.orElseThrow(new Error('Error'))).toBe(42))

      test('#ifPresent calls the function with the value', () => {
        const callback = vi.fn()
        maybeNumber.ifPresent(callback)
        expect(callback).toHaveBeenCalledWith(42)
      })

      test('#ifEmpty does not call the function', () => {
        const callback = vi.fn()
        maybeNumber.ifEmpty(callback)
        expect(callback).not.toHaveBeenCalled()
      })
    })

    when('called with null', () => {
      it('throws an execption', () => {
        expect(() => Optional.of(null)).toThrowError('Cannot create Optional of null or undefined')
      })
    })

    when('called with undefined', () => {
      it('throws an execption', () => {
        expect(() => Optional.of(undefined)).toThrowError('Cannot create Optional of null or undefined')
      })
    })
  })

  describe('#empty', () => {
    when('called', () => {
      beforeEach(() => (maybeNumber = Optional.empty<number>()))

      test('#isPresent returns false', () => expect(maybeNumber.isPresent()).toBeFalse())
      test('#isEmpty returns true', () => expect(maybeNumber.isEmpty()).toBeTrue())
      test('#get throws an error', () => expect(() => maybeNumber.get()).toThrowError('No value present'))
      test('#orElse returns the other value', () => expect(maybeNumber.orElse(23)).toBe(23))
      test('#orElseThrow throws the error', () =>
        expect(() => maybeNumber.orElseThrow(new Error('Error'))).toThrowError('Error'))

      test('#ifPresent does not call the function', () => {
        const callback = vi.fn()
        maybeNumber.ifPresent(callback)
        expect(callback).not.toHaveBeenCalled()
      })

      test('#ifEmpty calls the function', () => {
        const callback = vi.fn()
        maybeNumber.ifEmpty(callback)
        expect(callback).toHaveBeenCalled()
      })
    })
  })

  describe('#ofNullable', () => {
    when('called with a value', () => {
      beforeEach(() => (maybeNumber = Optional.ofNullable(42)))

      test('#isPresent returns true', () => expect(maybeNumber.isPresent()).toBeTrue())
      test('#isEmpty returns false', () => expect(maybeNumber.isEmpty()).toBeFalse())
      test('#get returns the value', () => expect(maybeNumber.get()).toBe(42))
      test('#orElse returns the value', () => expect(maybeNumber.orElse(23)).toBe(42))
      test('#orElseThrow returns the value', () => expect(maybeNumber.orElseThrow(new Error('Error'))).toBe(42))

      test('#ifPresent calls the function with the value', () => {
        const callback = vi.fn()
        maybeNumber.ifPresent(callback)
        expect(callback).toHaveBeenCalledWith(42)
      })

      test('#ifEmpty does not call the function', () => {
        const callback = vi.fn()
        maybeNumber.ifEmpty(callback)
        expect(callback).not.toHaveBeenCalled()
      })
    })

    when('called with null', () => {
      beforeEach(() => (maybeNumber = Optional.ofNullable<number>(null)))

      test('#isPresent returns false', () => expect(maybeNumber.isPresent()).toBeFalse())
      test('#isEmpty returns true', () => expect(maybeNumber.isEmpty()).toBeTrue())
      test('#get throws an exception', () => expect(() => maybeNumber.get()).toThrowError('No value present'))
      test('#orElse returns the value it was given', () => expect(maybeNumber.orElse(23)).toBe(23))
      test('#orElseThrow throws the error', () =>
        expect(() => maybeNumber.orElseThrow(new Error('Error'))).toThrowError('Error'))

      test('#ifPresent does not call the function', () => {
        const callback = vi.fn()
        maybeNumber.ifPresent(callback)
        expect(callback).not.toHaveBeenCalled()
      })

      test('#ifEmpty calls the function', () => {
        const callback = vi.fn()
        maybeNumber.ifEmpty(callback)
        expect(callback).toHaveBeenCalled()
      })
    })

    when('called with undefined', () => {
      beforeEach(() => (maybeNumber = Optional.ofNullable<number>(undefined)))

      test('#isPresent returns false', () => expect(maybeNumber.isPresent()).toBeFalse())
      test('#isEmpty returns true', () => expect(maybeNumber.isEmpty()).toBeTrue())
      test('#get throws an exception', () => expect(() => maybeNumber.get()).toThrowError('No value present'))
      test('#orElse returns the value it was given', () => expect(maybeNumber.orElse(23)).toBe(23))
      test('#orElseThrow throws the error', () =>
        expect(() => maybeNumber.orElseThrow(new Error('Error'))).toThrowError('Error'))

      test('#ifPresent does not call the function', () => {
        const callback = vi.fn()
        maybeNumber.ifPresent(callback)
        expect(callback).not.toHaveBeenCalled()
      })

      test('#ifEmpty calls the function', () => {
        const callback = vi.fn()
        maybeNumber.ifEmpty(callback)
        expect(callback).toHaveBeenCalled()
      })
    })
  })
})
