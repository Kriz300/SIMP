#include <SoftwareSerial.h>

// averaging bin size, small in simulation
// probably want larger on real hardware
#define BINSIZE 1

// indicator LED pin when threshold met
#define INDIPIN 6

// level of threshold
#define DETTHRESH 80 

//#include <Ethernet.h>
#include <SPI.h>
//#include "Timer.h"
#include <LiquidCrystal.h>

float conversion1;
float db;
int sensor = 1 ;
int thresholdh = 25 ; // maximo valor
int thresholdl = 10 ; // minimo valor
long a; // instantaneous sample
long arr[BINSIZE]; // averaging bin
long avg; // calculated average
int i; // averaging bin index
int n; // for loop general purpose
int det; // detection active flag
int alarma_t = 0;
int alarma_g = 0;
int alarma_s = 0;
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);
int const SGAS = A2;
int LED_VERDE = 7;
int LED_AMARILLO = 9;
int LED_ROJO = 10;



void setup()
{
  Serial.begin(9600);
  lcd.begin(16, 2);
  pinMode(13,OUTPUT); // LED1 Temperatura
  pinMode(8,OUTPUT); // LED2 Temperatura
  //Serial.println("Setup");
  pinMode(INDIPIN, OUTPUT);
  digitalWrite(INDIPIN, LOW);
  pinMode(LED_VERDE, OUTPUT);
  pinMode(LED_AMARILLO, OUTPUT);
  pinMode(LED_ROJO, OUTPUT);

  
  // poulate the averaging bin with the current value
  a = analogRead(0);
  lcd.print("Midiendo...");
  for (n=0; n<BINSIZE; n++) {
    arr[n] = a;
  }
  i=0;
  det = 0;
}

void loop()
{
//Gas
  int valor = analogRead(SGAS);
  valor = map(valor, 300, 750, 0, 100);
  digitalWrite(LED_VERDE, HIGH);
  if (valor >= 30){
    digitalWrite(LED_AMARILLO, HIGH);
    if (valor >= 50){
      digitalWrite(LED_ROJO, HIGH);
      if (alarma_g != 3){
        alarma_g = 3;
        Serial.println("Alerta Gas: R");
      }
    }
    else{
      digitalWrite(LED_ROJO, LOW);
      if (alarma_g != 2){
        alarma_g = 2;
        Serial.println("Alerta Gas: A");      
      }
    }
  }
  else{
  	digitalWrite(LED_AMARILLO, LOW);
    if (alarma_g != 1){
      alarma_g = 1;
      Serial.println("Alerta Gas: V");
    }
  }
    	
  
//Temp
  int lectura = analogRead(sensor);
  float voltaje = 5.0 /1024 * lectura ; // Voltaje
  float temp = voltaje * 100 -50 ;
  
  if (temp <= thresholdl){
    digitalWrite(8, HIGH);
    digitalWrite(13, LOW);
    if (alarma_t != 1){
      alarma_t = 1;
      Serial.println("Temperatura Baja!");
    }
  }
  else if (temp >= thresholdh){
    digitalWrite(13, HIGH);
    digitalWrite(8, LOW);
    if (alarma_t != 3){
      alarma_t = 3;
      Serial.println("Temperatura Alta!");      
    }
  }
  else{
  	digitalWrite(8, LOW);
    digitalWrite(13, LOW);
    if (alarma_t != 2){
      alarma_t = 2;
      Serial.println("Apagando Alarma~");
    }
  }
  

// Sonido
  a = analogRead(0); // instantaneous value/*
  conversion1 = abs((a*5.0)/1024);
  db = 20 * log10(conversion1/0.0000950);
  if (a != 0) { // simulation bug?
    arr[i] = a;
    if (i > (BINSIZE-1)) { // or ==BINSIZE but don't trust computers :)
      i = 0; // go back to start of bin
    } else {
      i++;
    }
    // is the level over the detection threshold?
    if (det == 0) { // don't care if already on
      if (db >= DETTHRESH) {
        det = 1;
        digitalWrite(INDIPIN, HIGH);
        //Serial.println("Ruido Fuerte detectado: " + String(db));
        lcd.print("Alerta! "+String(db)+"db");
        alarma_s = 1;
      }
      else{
        if (alarma_s == 1){
        	alarma_s = 0;
        }
      }
    }
    else if (avg < DETTHRESH) {
      det=0;
      digitalWrite(INDIPIN, LOW);
    }
    
	lcd.setCursor(0, 1);
    
    delay(100); // let the ADC sample
  }
}
