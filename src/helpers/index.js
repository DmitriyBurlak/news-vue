export const formatData = (posts) => {
    posts.forEach(item => {
        item.rating = randomRating();
        item.timestamp = randomDate(new Date('01/01/2020'), new Date());
    });

    return posts.sort((a,b) => {
        return b.timestamp - a.timestamp;
    });
};

export const randomDate = (start, end) => {
    return +new Date(+start + Math.random() * (end - start));
};

export const randomRating = () => {
    return Math.floor(Math.random() * 6);
};