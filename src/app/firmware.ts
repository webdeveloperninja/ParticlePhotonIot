export const code = `
int pinSeven = D7;
int pinSix = D6;
int pinFive = D5;
int pinFour = D4;
int pinThree = D3;
int pinTwo = D2;
int pinOne = D1;
int pinZero = D0;


void setup()
{
   pinMode(A0,INPUT);

   pinMode(pinSeven, OUTPUT);
   digitalWrite(pinSeven, LOW);
   
   pinMode(pinSix, OUTPUT);
   digitalWrite(pinSix, LOW);
   
   pinMode(pinFive, OUTPUT);
   digitalWrite(pinFive, LOW);
   
   pinMode(pinFour, OUTPUT);
   digitalWrite(pinFour, LOW);

   pinMode(pinThree, OUTPUT);
   digitalWrite(pinThree, LOW);
   
   pinMode(pinTwo, OUTPUT);
   digitalWrite(pinTwo, LOW);

   pinMode(pinOne, OUTPUT);
   digitalWrite(pinOne, LOW);
   
   pinMode(pinZero, OUTPUT);
   digitalWrite(pinZero, LOW);


   
   Particle.function("pin-seven", pinSevenToggle);
   Particle.function("pin-six", pinSixToggle);
   Particle.function("pin-five", pinFiveToggle);
   Particle.function("pin-four", pinFourToggle);
   Particle.function("pin-three", pinThreeToggle);
   Particle.function("pin-two", pinTwoToggle);
   Particle.function("pin-one", pinOneToggle);
   Particle.function("pin-zero", pinZeroToggle);
}

void loop() {
    int value=analogRead(A0);
    String val=String(value);
    
    Particle.publish("value", val, PRIVATE);
    delay(60000);
}


int pinSevenToggle(String command) {
    if (command=="on") {
        digitalWrite(pinSeven,HIGH);
        return 1;
    }
    else if (command=="off") {
        digitalWrite(pinSeven,LOW);
        return 0;
    }
    else {
        return -1;
    }
}

int pinSixToggle(String command) {
    if (command=="on") {
        digitalWrite(pinSix,HIGH);
        return 1;
    }
    else if (command=="off") {
        digitalWrite(pinSix,LOW);
        return 0;
    }
    else {
        return -1;
    }
}

int pinFiveToggle(String command) {
    if (command=="on") {
        digitalWrite(pinFive,HIGH);
        return 1;
    }
    else if (command=="off") {
        digitalWrite(pinFive,LOW);
        return 0;
    }
    else {
        return -1;
    }
}

int pinFourToggle(String command) {
    if (command=="on") {
        digitalWrite(pinFour,HIGH);
        return 1;
    }
    else if (command=="off") {
        digitalWrite(pinFour,LOW);
        return 0;
    }
    else {
        return -1;
    }
}

int pinThreeToggle(String command) {
    if (command=="on") {
        digitalWrite(pinThree,HIGH);
        return 1;
    }
    else if (command=="off") {
        digitalWrite(pinThree,LOW);
        return 0;
    }
    else {
        return -1;
    }
}

int pinTwoToggle(String command) {
    if (command=="on") {
        digitalWrite(pinTwo,HIGH);
        return 1;
    }
    else if (command=="off") {
        digitalWrite(pinTwo,LOW);
        return 0;
    }
    else {
        return -1;
    }
}

int pinOneToggle(String command) {
    if (command=="on") {
        digitalWrite(pinOne,HIGH);
        return 1;
    }
    else if (command=="off") {
        digitalWrite(pinOne,LOW);
        return 0;
    }
    else {
        return -1;
    }
}

int pinZeroToggle(String command) {
    if (command=="on") {
        digitalWrite(pinZero,HIGH);
        return 1;
    }
    else if (command=="off") {
        digitalWrite(pinZero,LOW);
        return 0;
    }
    else {
        return -1;
    }
}`;
