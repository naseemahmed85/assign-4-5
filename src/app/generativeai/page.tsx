import Link from "next/link";

export default function generativeai(){
    return(
        <div className="Parent1">
        <h1 className="text"> Generative AI </h1>
        <div className="container">
        <img src="../image/generativeai.png" alt="Open source ai" />
        </div>
        <p className="text1">
        Generative AI refers to a subset of artificial intelligence that focuses on creating new content—whether its text, images, music, code, or other forms of data—by learning from existing data patterns. Unlike traditional AI systems that perform specific tasks based on predefined rules or patterns, generative AI models can produce original and creative outputs based on the data they have been trained on. This technology is powered by advanced machine learning algorithms, particularly neural networks like Generative Adversarial Networks (GANs) and Transformer models, which have transformed areas such as creative content generation, natural language processing, and even scientific discovery.
        </p>

        <h2 className="text2"> Generative Adversarial Networks (GANs) </h2>
        <p className="text3">
        One of the most popular frameworks for generative AI, GANs consist of two neural networks—the generator and the discriminator—working in tandem to create new data.

        Generator: The generator network creates new data that mimics the training data, such as images, sounds, or text.
        Discriminator: The discriminator network evaluates the data generated by the generator and compares it to the real data. It helps the generator improve by providing feedback on how close the generated data is to real examples.
        </p>

        <h3 className="text4"> Transformer Models </h3>
        <p className="text5">
        Transformer models, like OpenAIs GPT (Generative Pretrained Transformer) or Googles BERT, are the foundation for many modern generative AI systems. These models are particularly powerful for language-related tasks because of their ability to understand and generate coherent text.

        Language Models: Generative AI models like GPT-3 and GPT-4 are examples of large language models that can generate human-like text based on prompts. These models are trained on massive datasets and can perform tasks like writing essays, creating code, answering questions, and more.
        Fine-Tuning and Transfer Learning: These models can be fine-tuned for specific tasks, such as translating languages, summarizing articles, or answering domain-specific questions, making them highly versatile in various applications.
        </p>
        <h4 className="text6"> Variational Autoencoders (VAEs) </h4>
        <p className="text7">
        VAEs are generative models that learn to encode input data (like images or text) into a compressed representation and then decode that compressed information back into a similar but not identical version of the original data.

        Reconstruction and Generation: VAEs can be used to generate new data similar to the original data but with variations. This can be applied in areas like facial image generation, where the model can generate new, unique faces by slightly modifying learned features.
        Latent Space Manipulation: VAEs allow for exploration in the latent space (the space of compressed features), where different aspects of the data, such as gender or age in images, can be manipulated.
        </p>

        <div className="back-to-home">
                <Link href="/">
                <button>Back</button>
                </Link>
            </div>
        </div>
)
}