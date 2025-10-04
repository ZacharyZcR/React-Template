import { describe, it, expect, beforeEach } from 'vitest';
import { useExampleStore } from '../example-store';

describe('Example Store', () => {
  beforeEach(() => {
    useExampleStore.setState({ count: 0 });
  });

  it('should initialize with count 0', () => {
    const { count } = useExampleStore.getState();
    expect(count).toBe(0);
  });

  it('should increment count', () => {
    const { increment } = useExampleStore.getState();
    increment();
    expect(useExampleStore.getState().count).toBe(1);
  });

  it('should decrement count', () => {
    const { increment, decrement } = useExampleStore.getState();
    increment();
    increment();
    decrement();
    expect(useExampleStore.getState().count).toBe(1);
  });

  it('should reset count', () => {
    const { increment, reset } = useExampleStore.getState();
    increment();
    increment();
    reset();
    expect(useExampleStore.getState().count).toBe(0);
  });
});
