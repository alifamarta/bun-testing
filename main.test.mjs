import {describe, it, expect} from 'bun:test';

import {add} from './calc.test.mjs';

describe('Calculator', () => {
    it('should add correctly', () => {
        // Arrange
        const a = 1;
        const b = 1;

        // Act
        const res = add(a, b);

        // Assert
        expect(res).toBe(2);
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