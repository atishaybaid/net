#include <stdio.h>
#include <stdlib.h>

void fun(int *arr,unsigned int n)
{
     int i;
     for(i=0;i<n;i++)
     printf("%d",arr[i]);
}


int main()
{
  int arr[] = {1,2,3};
  unsigned int n = sizeof(arr)/sizeof(arr[0]);
  fun(arr,n);
  getchar();
  return 0;
}
