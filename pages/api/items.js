export default function handler(req, res) {
    res.status(200).json(
        [
            { 
                number: 112,
                title: "Add tags for solutions",
                details: "Easier to search for solutions based on a specific stack",
                tag: "Enhancement",
                likes: 2
            },
            { 
                number: 99,
                title: "Add a dark theme option",
                details: "It would help with light sensitivities and who prefer dark mode",
                tag: "Feature",
                likes: 4
            },
            { 
                number: 65,
                title: "Q&A within the challenge hubs",
                details: "Challenge specific Q&A would make for easy reference",
                tag: "Feature",
                likes: 1
            },
            { 
                number: 51,
                title: "Allow image/video upload to feedback",
                details: "Images and screencasts can enhance comments on solutions",
                tag: "Enhancement",
                likes: 2
            },
            { 
                number: 42,
                title: "Ability to follow others",
                details: "Stay updated on comments and solutions other people post",
                tag: "Feature",
                likes: 3
            },
            { 
                number: 3,
                title: "Preview images not loading",
                details: "Challenge preview images are missing when you apply a filter",
                tag: "Bug",
                likes: 0
            },
        ]
    )
}