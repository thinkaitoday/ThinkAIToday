import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-trivia',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent implements OnInit {
  triviaList: { title: string; detail: string }[] = [
    { title: "Deep Blue's Victory", detail: "In 1997, IBM's Deep Blue supercomputer defeated world chess champion Garry Kasparov, marking a milestone in AI history." },
    { title: "Robot Citizens", detail: "Sophia, a humanoid robot, was granted citizenship by Saudi Arabia in 2017, making her the world's first robot citizen." },
    { title: "AI in Medicine", detail: "AI systems can now help detect diseases like cancer early, often more accurately than human doctors." },
    { title: "Self-Driving Cars", detail: "Google's self-driving cars have traveled over 2 million miles without a human driver!" },
    { title: "AI in Video Games", detail: "An AI from OpenAI learned to play the complex video game Dota 2 and even defeated professional players." },
    { title: "Robot Fish", detail: "Scientists have created robot fish powered by AI to monitor ocean pollution levels!" },
    { title: "AI-Powered Restaurants", detail: "There are restaurants in Japan where robots take orders and serve food, completely autonomously!" },
    { title: "AI-Generated Music", detail: "AI can compose music in the style of famous composers like Beethoven or Mozart!" },
    { title: "Human Mimicry", detail: "Some AI chatbots can mimic human conversations so well, it’s difficult to tell they’re not human." },
    { title: "AI in Farming", detail: "AI-powered robots can plant, water, and harvest crops with precision, improving efficiency in farming." },
    { title: "Predicting Earthquakes", detail: "AI systems are now being trained to analyze patterns in seismic data to predict earthquakes before they happen." },
    { title: "Real-Time Language Translation", detail: "Apps like Google Translate use AI to translate languages in real-time, breaking down communication barriers instantly." },
    { title: "AI Writing Books", detail: "An AI co-authored a book called '1 the Road' which mimics Jack Kerouac's 'On the Road' and narrates a journey in real-time." },
    { title: "AI Image Recognition", detail: "AI can recognize images and objects, even identifying different breeds of dogs and types of plants!" },
    { title: "Smart Personal Assistants", detail: "AI assistants like Siri, Alexa, and Google Assistant can recognize your voice and respond to your questions." },
    { title: "Emotional AI", detail: "There’s AI now that can detect emotions through facial recognition and tone of voice!" },
    { title: "AI in Space Exploration", detail: "NASA uses AI to analyze data from space and assist in navigating its Mars rovers autonomously." },
    { title: "AI vs Humans in Reading", detail: "An AI developed by Alibaba outperformed humans in reading comprehension tests for the first time in 2018." },
    { title: "AI in Hollywood", detail: "AI is used in Hollywood for creating special effects and even to bring deceased actors back to life digitally." },
    { title: "Teaching Robots to Dance", detail: "AI-powered robots have been programmed to dance in sync to music and even perform choreographed routines!" },
    { title: "AI in Wildlife Conservation", detail: "AI drones can help track endangered animals and monitor poaching in wildlife reserves." },
    { title: "Medical Imaging", detail: "AI helps doctors analyze medical images like X-rays and MRIs, detecting issues faster than human eyes." },
    { title: "AI Painting", detail: "An AI painted a portrait that sold for $432,500 at a Christie’s auction!" },
    { title: "AI Helps Write News", detail: "Some news articles are now written by AI, generating real-time updates on topics like sports scores." },
    { title: "AI in the Military", detail: "AI-powered drones are being developed to assist in military reconnaissance without risking human lives." },
    { title: "AI in Shopping", detail: "AI helps online stores like Amazon recommend products based on your shopping habits and preferences." },
    { title: "Fake News Detection", detail: "AI is used to detect fake news articles by analyzing language patterns and sources." },
    { title: "AI Predicting Music Hits", detail: "Record labels use AI to analyze which songs are likely to be hits based on musical patterns and trends." },
    { title: "AI Poetry", detail: "Some AIs have been trained to write poetry, creating verses that express emotions and tell stories." },
    { title: "Smart Prosthetics", detail: "AI helps control advanced prosthetic limbs that respond to muscle signals and even learn movements over time." },
    { title: "Predicting Heart Attacks", detail: "AI algorithms can predict heart attacks by analyzing heart rate and other health data." },
    { title: "AI Archaeologists", detail: "AI is helping archaeologists discover ancient ruins by analyzing satellite images to find patterns." },
    { title: "AI in Customer Service", detail: "Many companies use AI chatbots for customer service, providing 24/7 assistance to customers worldwide." },
    { title: "AI Voice Cloning", detail: "AI can now clone a person's voice, replicating it in different languages or creating custom messages." },
    { title: "AI for Language Learning", detail: "Apps like Duolingo use AI to personalize language learning for each user, making it more effective." },
    { title: "Robot Bartenders", detail: "Some bars in cities like Las Vegas have robot bartenders that mix and serve drinks using AI technology." },
    { title: "Identifying Invasive Species", detail: "AI is used to track and identify invasive plant species to protect ecosystems from harm." },
    { title: "AI vs Gamers", detail: "AI can now beat top players in games like StarCraft II, which requires quick thinking and complex strategies." },
    { title: "AI Reading Human Faces", detail: "AI can analyze human faces to determine age, gender, and even mood with impressive accuracy." },
    { title: "AI Learning from You", detail: "AI learns from your online activity to make your experience better, like showing more videos you enjoy on YouTube." },
    { title: "AI-Generated Clothing", detail: "Fashion brands use AI to design new clothes based on fashion trends and customer preferences." },
    { title: "Preventing Online Scams", detail: "AI algorithms help detect and prevent online scams by identifying suspicious behavior patterns." },
    { title: "Helping Doctors Diagnose", detail: "AI assists doctors by suggesting diagnoses based on medical records, making healthcare more efficient." },
    { title: "AI in Animated Films", detail: "AI plays a role in animating characters and creating realistic scenes in animated films." },
    { title: "AI-Powered Storytelling", detail: "AI can create storylines for books and movies, providing endless ideas for writers and filmmakers." },
    { title: "AI Facial Recognition in Airports", detail: "Some airports use AI facial recognition to speed up the security process for travelers." },
    { title: "AI-Generated Memes", detail: "AI has been trained to create memes, capturing the humor of internet culture." },
    { title: "AI Reading Body Language", detail: "AI can analyze a person’s body language to understand their mood and intentions." },
    { title: "AI in Sports Analysis", detail: "AI tracks players' movements and performance in sports, helping coaches develop winning strategies." },
    { title: "AI for Detecting Earthlike Planets", detail: "NASA uses AI to analyze space data, searching for planets that might support life." },
    { title: "AI for Predicting Weather", detail: "AI models analyze weather data to improve the accuracy of weather forecasts worldwide." },
    { title: "AI Language", detail: "Facebook created an AI that invented its own language, leading Facebook to shut it down." },
    { title: "Game Mastery", detail: "AI has beaten human champions in complex games like chess, Go, and poker." },
    { title: "IBM's Watson", detail: "IBM's Watson, a question-answering computer system, won against human champions on Jeopardy!" },
    { title: "Creative AI", detail: "AI can now create art, music, and literature, challenging traditional creative processes." },
    { title: "AI Artwork Sale", detail: "In 2018, an AI-generated painting sold for over $400,000 at auction." },
    { title: "Autonomous Cars", detail: "The first autonomous cars appeared in the 1980s, decades before Tesla’s self-driving cars." },
    { title: "GPT Capabilities", detail: "OpenAI's GPT model can write essays, answer questions, and even code programs." },
    { title: "Early Disease Detection", detail: "AI is used to detect diseases like cancer earlier than traditional methods." },
    { title: "AI-Assisted Surgery", detail: "Robots powered by AI can perform surgeries more accurately than human surgeons." },
    { title: "Recommendations", detail: "AI algorithms power the recommendations you see on Netflix, YouTube, and Amazon." },
    { title: "Emotion Recognition", detail: "Some AI programs can recognize emotions in text and even images." },
    { title: "Trend Prediction", detail: "AI can analyze customer behavior to help companies predict shopping trends." },
    { title: "AlphaFold Breakthrough", detail: "DeepMind’s AlphaFold solved a 50-year-old problem by predicting protein structures." },
    { title: "Autonomous Delivery", detail: "AI-powered robots and drones are now being used for autonomous deliveries." },
    { title: "AI in Law", detail: "AI systems are being trained to help lawyers analyze legal documents quickly." },
    { title: "AI and Climate Change", detail: "AI helps scientists track and predict climate change impacts, aiding environmental conservation." },
    { title: "AI and Music Composition", detail: "AI can compose music in the style of any composer, even mimicking Beethoven’s symphonies." },
];

  selectedTrivia: { title: string; detail: string }[] = [];

  ngOnInit() {
    this.loadRandomTrivia();
  }

  loadRandomTrivia() {
    this.selectedTrivia = [];
    const triviaCopy = [...this.triviaList]; // Copy to avoid modifying the original list
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * triviaCopy.length);
      this.selectedTrivia.push(triviaCopy.splice(randomIndex, 1)[0]);
    }
  }
}
