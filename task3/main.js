import isPalindrome from './isPalindrome';
import substr from './substr';
import apply from './apply';

isPalindrome('radar');
isPalindrome('a');
isPalindrome('abs');


substr('abba', 0, 1);
substr('abba', 1, 2);
substr('abba', -10, 2);
substr('abba', -1, 100);
substr('abba', -1, -1);
substr('abba', 1, -10);
substr('abba', 1, 10);
substr('abba', 1, 0);
substr('abba', 100, 3);

apply(0, Math.sqrt, 4);
apply(1, Math.sqrt, 4);
apply(2, Math.sqrt, 16);
apply(3, Math.sqrt, 256);
apply(1, v => v ** 2, 3);
apply(5, v => v + 10, 3);
