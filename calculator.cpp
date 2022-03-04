#include <iostream>
#include <math.h>

double long Cal(long& count, double long remain)
{
    if (remain == 2)
        return count;

    std::cout << count << "\n";
    remain /= 2;
    return Cal(++count, remain);
}

int main()
{
    long n = 1;
    std::cout << Cal(n, std::pow(10, 38)) << std::endl;
}