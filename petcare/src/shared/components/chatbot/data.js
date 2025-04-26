const petChatData = {
    initialQuestion: "Select pet",
    options: {
        cat: {
            questions: {
                "Best foods": "Cats thrive on high-protein diets. Good options include Royal Canin, Hill’s Science Diet, and Purina Pro Plan.",
                "Vaccinations": "Essential cat vaccines include FVRCP (feline viral rhinotracheitis, calicivirus, panleukopenia) and rabies.",
                "Common diseases": "Common cat diseases include feline leukemia virus (FeLV), feline immunodeficiency virus (FIV), and kidney disease.",
                "Grooming tips": "Brush regularly to reduce shedding. Use nail clippers and cat-friendly shampoo if needed.",
                "Litter training": "Place your cat in the litter box after meals and play. Keep the box clean and accessible."
            }
        },
        dog: {
            questions: {
                "Best foods": "Dogs benefit from balanced diets with protein, fats, and carbohydrates. Brands like Pedigree, Hill’s, Orijen, and Royal Canin are good choices.",
                "Vaccinations": "Core dog vaccines include rabies, distemper, parvovirus, and adenovirus.",
                "Common diseases": "Dogs can suffer from heartworms, parvovirus, kennel cough, and arthritis.",
                "Training tips": "Start early with basic commands like sit, stay, and come. Use positive reinforcement.",
                "Exercise needs": "Dogs need daily exercise. Breeds like Labradors need more activity than smaller breeds like Chihuahuas.",
                "Grooming tips": "Regular brushing, nail trimming, and bathing help keep your dog healthy and clean."
            }
        }
    }
};

export default petChatData;
