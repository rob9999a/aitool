import React from 'react';
import Navbar from '../../Component/Website/Header/Navbar';

const SectionHeading = ({ children }) => (
    <h1 className="text-2xl md:text-2xl font-extrabold text-red-600 mb-8 leading-tight">
        {children}
    </h1>
);

const SubHeading = ({ children }) => (
    <h2 className="text-2xl font-bold text-start text-red-600 mb-12">
        {children}
    </h2>
);

const Paragraph = ({ children, isBold = false, isItalic = false }) => {
    const classNames = [
        'text-gray-800 dark:text-gray-200 mb-6 text-lg leading-relaxed',
        isBold && 'font-semibold',
        isItalic && 'italic'
    ].filter(Boolean).join(' ');

    return <p className={classNames}>{children}</p>;
};

const BulletList = ({ items }) => (
    <ul className="list-disc list-inside mb-6 space-y-2 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
);

export default function IgnoreFreelance() {
    const wrongPoints = [
        "They try AI for random tasks — writing a quick email, or generating a social post — but without a bigger plan.",
        "They don't build systems around AI that automate the right parts of their workflow.",
        "They ignore data and feedback, so AI outputs stay generic, not tailored to their ideal clients.",
        "They fail to combine AI with their unique human skills, letting it do too much or too little."
    ];

    const powerPoints = [
        "Identify your highest-leverage tasks (proposals, client follow-ups, content ideas)",
        "Create workflows that let AI handle repetitive parts while you focus on relationships and strategy",
        "Use AI to analyze past wins and losses, improving your pitches and pricing",
        "Continuously refine prompts to get personalized, powerful outputs every time"
    ];

    return (

        <>
            <Navbar></Navbar>


            <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-16">
                <div className="max-w-8xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-10 transition-transform transform hover:scale-[1.02] duration-300">
                    <SectionHeading>
                        Most freelancers ignore the one AI tool that could double their income — because they don't know how to use it strategically
                    </SectionHeading>

                    <Paragraph>
                        In the age of AI, the tools to transform your freelance business aren't just a luxury — they're a necessity. Yet, surprisingly, many freelancers overlook the one AI tool that could literally double their income.
                    </Paragraph>

                    <Paragraph isBold isItalic>
                        Why?
                    </Paragraph>

                    <Paragraph>
                        Because it's not enough to just have the tool. You must know how to use it strategically.
                    </Paragraph>

                    <SubHeading>
                        Here's what most freelancers get wrong:
                    </SubHeading>
                    <BulletList items={wrongPoints} />

                    <SubHeading>
                        The real power of this AI tool comes when you:
                    </SubHeading>
                    <BulletList items={powerPoints} />

                    <Paragraph isBold>
                        When used strategically, AI becomes your digital business partner — boosting productivity, improving quality, and unlocking new income streams.
                    </Paragraph>

                    <SubHeading>
                        The truth?
                    </SubHeading>

                    <Paragraph>
                        You already have access to this tool. The missing piece is your strategy.
                    </Paragraph>

                    <Paragraph isBold isItalic>
                        So, are you ready to stop ignoring AI and start mastering it?
                    </Paragraph>
                </div>
            </section>
        </>
    );
}