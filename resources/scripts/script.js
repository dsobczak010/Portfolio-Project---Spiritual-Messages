const quotes = [
    { text: "Realize deeply that the present moment is all you ever have.", author: "Eckhart Tolle" },
    { text: "The primary cause of unhappiness is never the situation but your thoughts about it.", author: "Eckhart Tolle" },
    { text: "Life will give you whatever experience is most helpful for the evolution of your consciousness.", author: "Eckhart Tolle" },
    { text: "You find peace not by rearranging the circumstances of your life, but by realizing who you are at the deepest level.", author: "Eckhart Tolle" },
    { text: "Acknowledging the good that you already have in your life is the foundation for all abundance.", author: "Eckhart Tolle" },
    { text: "Whatever you fight, you strengthen, and what you resist, persists.", author: "Eckhart Tolle" },
    { text: "Life isn't as serious as the mind makes it out to be.", author: "Eckhart Tolle" },
    { text: "Sometimes letting things go is an act of far greater power than defending or hanging on.", author: "Eckhart Tolle" },
    { text: "Being spiritual has nothing to do with what you believe and everything to do with your state of consciousness.", author: "Eckhart Tolle" },
    { text: "To realize that you are not your thoughts is when you begin to awaken spiritually.", author: "Eckhart Tolle" },
  
    { text: "Change the way you look at things and the things you look at change.", author: "Wayne Dyer" },
    { text: "How people treat you is their karma; how you react is yours.", author: "Wayne Dyer" },
    { text: "You are not stuck where you are unless you decide to be.", author: "Wayne Dyer" },
    { text: "If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles.", author: "Wayne Dyer" },
    { text: "You cannot always control what goes on outside. But you can always control what goes on inside.", author: "Wayne Dyer" },
    { text: "Abundance is not something we acquire. It is something we tune into.", author: "Wayne Dyer" },
    { text: "You leave old habits behind by starting out with the thought, 'I release the need for this in my life.'", author: "Wayne Dyer" },
    { text: "Our intention creates our reality.", author: "Wayne Dyer" },
    { text: "When you judge another, you do not define them, you define yourself.", author: "Wayne Dyer" },
    { text: "The highest form of ignorance is when you reject something you don't know anything about.", author: "Wayne Dyer" },
  
    { text: "The way you think, the way you behave, the way you eat, can influence your life by 30 to 50 years.", author: "Deepak Chopra" },
    { text: "The most creative act you will ever undertake is the act of creating yourself.", author: "Deepak Chopra" },
    { text: "You must find the place inside yourself where nothing is impossible.", author: "Deepak Chopra" },
    { text: "In the process of letting go, you will lose many things from the past, but you will find yourself.", author: "Deepak Chopra" },
    { text: "Each of us is here to discover our true Self... that essentially we are spiritual beings who have taken manifestation in physical form.", author: "Deepak Chopra" },
    { text: "Silence is the great teacher, and to learn its lessons you must pay attention to it.", author: "Deepak Chopra" },
    { text: "Happiness for a reason is just another form of misery because the reason can be taken away from us at any time.", author: "Deepak Chopra" },
    { text: "Every time you are tempted to react in the same old way, ask if you want to be a prisoner of the past or a pioneer of the future.", author: "Deepak Chopra" },
    { text: "You don't need to seek freedom in a different land, for it exists within your own mind.", author: "Deepak Chopra" },
    { text: "Even when you think you have your life all mapped out, things happen that shape your destiny in ways you might never have imagined.", author: "Deepak Chopra" },
  
    { text: "Mind is the builder; knowledge and wisdom are its product.", author: "Edgar Cayce" },
    { text: "The Spirit is life. The mind is the builder. The physical is the result.", author: "Edgar Cayce" },
    { text: "Dreams are today's answers to tomorrow's questions.", author: "Edgar Cayce" },
    { text: "What one thinks continually, they become.", author: "Edgar Cayce" },
    { text: "The power of love can work magic in your life.", author: "Edgar Cayce" },
    { text: "Know that you are an eternal being, a spark of the Divine.", author: "Edgar Cayce" },
    { text: "Do not be afraid to love. Do not be afraid to be humble, to be compassionate.", author: "Edgar Cayce" },
    { text: "You can make your life anything you want it to be.", author: "Edgar Cayce" },
    { text: "Keep in mind that day-to-day thoughts are the seeds from which your tomorrows grow.", author: "Edgar Cayce" },
    { text: "Meditate upon what you would be, and then act that part accordingly.", author: "Edgar Cayce" },
  
    { text: "The present moment is filled with joy and happiness. If you are attentive, you will see it.", author: "Thich Nhat Hanh" },
    { text: "Breathing in, I calm my body. Breathing out, I smile.", author: "Thich Nhat Hanh" },
    { text: "When another person makes you suffer, it is because they suffer deeply within themselves.", author: "Thich Nhat Hanh" },
    { text: "Letting go gives us freedom, and freedom is the only condition for happiness.", author: "Thich Nhat Hanh" },
    { text: "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.", author: "Thich Nhat Hanh" },
    { text: "To be beautiful means to be yourself. You don’t need to be accepted by others.", author: "Thich Nhat Hanh" },
    { text: "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.", author: "Thich Nhat Hanh" },
    { text: "Walk as if you are kissing the Earth with your feet.", author: "Thich Nhat Hanh" },
    { text: "Only the present moment contains life.", author: "Thich Nhat Hanh" },
    { text: "Compassion is a verb.", author: "Thich Nhat Hanh" },
  
    { text: "You are the sky. Everything else – it’s just the weather.", author: "Pema Chödrön" },
    { text: "Only to the extent that we expose ourselves over and over to annihilation can that which is indestructible be found in us.", author: "Pema Chödrön" },
    { text: "Nothing ever goes away until it has taught us what we need to know.", author: "Pema Chödrön" },
    { text: "We don't set out to save the world; we set out to wonder how other people are doing and to reflect on how our actions affect others.", author: "Pema Chödrön" },
    { text: "Fear is a natural reaction to moving closer to the truth.", author: "Pema Chödrön" },
    { text: "The most fundamental aggression to ourselves, the most fundamental harm we can do to ourselves, is to remain ignorant by not having the courage and the respect to look at ourselves honestly and gently.", author: "Pema Chödrön" },
    { text: "When you begin to touch your heart or let your heart be touched, you begin to discover that it’s bottomless.", author: "Pema Chödrön" },
    { text: "The trick is to keep exploring and not bail out, even when we find out that something is not what we thought.", author: "Pema Chödrön" },
    { text: "Each moment is an opportunity to make a fresh start.", author: "Pema Chödrön" },
    { text: "This very moment is the perfect teacher, and, lucky for us, it’s with us wherever we are.", author: "Pema Chödrön" },
  
    { text: "We’re all just walking each other home.", author: "Ram Dass" },
    { text: "The quieter you become, the more you can hear.", author: "Ram Dass" },
    { text: "Be here now.", author: "Ram Dass" },
    { text: "The most important aspect of love is not in giving or receiving: it's in the being.", author: "Ram Dass" }
] 

const messageArea = document.getElementById("message-text");

const randQuote = () => {
    let rand = Math.floor(Math.random() * 64);
    let quote = '"' + quotes[rand].text + '"' + " <br><br>-" + quotes[rand].author;
    messageArea.innerHTML = quote;
}

randQuote();

const button = document.getElementById("btn-generate");
button.addEventListener("click", randQuote);