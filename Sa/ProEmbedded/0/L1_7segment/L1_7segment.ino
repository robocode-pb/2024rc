/*{
   A-2,   
F-7,  B-3,
   G-8,
E-6,  C-4,
   D-5
}*/

int numPins[7] = {2, 7, 3, 8, 6, 4, 5};
int num[10][7] = {
  {  111,   // 0
    1,  1,
     000,
    1,  1,
     111    
  } ,
  {  000,   // 1
    0,  1,
     000,
    0,  1,
     000    
  } ,
  {  111,   // 2
    0,  1,
     111,
    1,  0,
     111
  } ,
  {  111,   // 3
    0,  1,
     111,
    0,  1,
     111   
  } ,
  {  000,   // 4
    1,  1,
     111,
    0,  1,
     000   
  } ,
  {  111,   // 5
    1,  0,
     111,
    0,  1,
     111  
  } ,
  {  111,   // 6
    1,  0,
     111,
    1,  1,
     111  
  } ,
  {  111,   // 7
    0,  1,
     000,
    0,  1,
     000  
  } ,
  {  111,   // 8
    1,  1,
     111,
    1,  1,
     111 
  } ,
  {  111,   // 9
    1,  1,
     111,
    0,  1,
     111
  }
};

void setup() {
  for (int i = 0; i < 7; i++)
    {pinMode(numPins[i], OUTPUT);}
  pinMode(12, INPUT);
  pinMode(11, INPUT);
}

int clicks = 0;
void loop() {
  // якщо кнопка натиснута
  if(digitalRead(11) and clicks < 9) clicks ++;
  if(digitalRead(12) and clicks > 0) clicks --;
  displayNumber(clicks);
  delay(200);
  
}

void displayNumber(byte number) {
  for (byte i = 0; i < 7; i++)
   {digitalWrite(numPins[i], num[number][i]);}
}
