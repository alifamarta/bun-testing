import {describe, it, expect} from 'bun:test';

import {add} from './calc.test.mjs';

describe('Calculator', () => {
    it('should add correctly', () => {
        // Arrange
        const a = 5;
        const b = 9;

        // Act
        const expectedVal = add(a, b);

        // Assert
        const actualVal = a + b;
        expect(expectedVal).toBe(actualVal);
    });

    it('should throw an error if string passed on a parameter', () => {
        const potentialError = () => {
            // Arrange
            const a = '3';
            const b = 3;

            // Act
            add(a, b);
        };

        // Assert
        expect(potentialError).toThrow(Error);
    });

    it('should throw an error if string passed on a parameter', () => {
        const potentialError = () => {
            // Arrange
            const a = 3;
            const b = '3';

            // Act
            add(a, b);
        };

        // Assert
        expect(potentialError).toThrow(Error);
    });
});