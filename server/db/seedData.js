//comments
const comments = [
    { date: '2024-01-12', content: 'What an amazing site this is! Whoever did this must have worked through alot of frustration and tears.'}
]

//plans
const plans = [
    {imgUrl:'https://www.ana-white.com/sites/default/files/workbench%20rolls%20away%20wheels%20hide%20compact%20garage.jpg', title: 'Ultimate Roll Away Workbench with Miter Saw Stand', description: 'This workbench features a miter saw stand, with roll away carts to hold all your tools and create work spaces.', website: 'https://www.ana-white.com/woodworking-projects/ultimate-roll-away-workbench-miter-saw-stand', commentID: 1 },
    {imgUrl:'https://www.anikasdiylife.com/wp-content/uploads/2019/08/DIY-table-saw-stand-Anikas-DIY-Life-Pinterest1.jpg', title: 'Table Saw Stand With Folding Outfeed Table', description: 'This simple portable table saw stand is perfect for a small shop!', website: 'https://www.anikasdiylife.com/diy-table-saw-stand-plans/', commentID: 1 },
    {imgUrl: 'https://images.squarespace-cdn.com/content/v1/5eb440cde13ffe469f055d9e/1588897883094-PPHVDAXA8S3BMWNGRTMC/IMG_8254.jpeg?format=1000w', title: 'Record Cabinet Storage', description: 'record cabinet storage plans', website: 'https://www.pinksoulstudios.com/shop/record-cabinet-storage-plans-instant-digital-download', commentID: 1} 
]

//authors
const authors = [
    { firstname: 'Ana', lastname: 'White', bio: 'Pioneering leader behind the DIY furniture movement', isProfessional: true, planID: 1 },
    { firstname: 'Anika', lastname: 'Gandhi', bio: 'Specializing in easy woodworking and simple home improvement.', isProfessional: true, planID: 2 },
    { firstname: 'Alma', lastname: 'Villalobos', bio: 'maker of things.', isProfessional: true, planID:3 }
]

//only put in foreign keys, primary keys are inherit
module.exports = { comments, plans, authors }