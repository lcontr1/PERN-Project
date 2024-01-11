//users
const users = [
    { username: 'builderperson', password: 'abc123', firstname: 'John', lastname: 'Doe' },
    { username: 'carpenter22', password: 'password', firstname: 'Jane', lastname: 'Jameson' },
    { username: 'woodworking23', password: 'hobbyist', firstname: 'Mario', lastname: 'Sanchez' },
    { username: 'bestbuilderalive', password: 'build4lyfe', firstname: 'Mary', lastname: 'Juarez' }
]
//comments
const comments = [
    { date: '01/11/2024', content: 'example comment posted here' }
]

//plans
const plans = [
    {title: 'Wood Strip Cutting Board', author: 'Rockler', description: ' Turn some hard maple and walnut cutoffs into a useful kitchen cutting board with handle and drip channel. We used two strips of 1/4-in.-wide walnut sandwiched between a piece of brown-colored maple and two pieces of white maple to form an attractive lamination.', difficulty: 'easy' , video:'https://youtu.be/8pVDGJJZmoY', planswebsite: 'https://www.rockler.com/learn/DIY-Cutting-Board-Plans'  }, 
    { title: 'Clock Radio Project Kit', author: 'Rockler', description: ' Turn any enclosure into a wireless speaker that will connect to any Bluetooth device. You build the speaker cabinet in the shape and material of your choice. You can use a simple block of wood with a hole drilled in it, or build a hollow cabinet with fancy joinery—its up to you.', difficulty: 'easy' , video:'https://youtu.be/Enl76avtwow', planswebsite: 'https://go.rockler.com/plans/clock-radio-plan.pdf?_gl=1*1v9huti*_ga*MTc2MTg4MDYzNC4xNzA0OTA5NTM4*_ga_Y6C4TD4B55*MTcwNTAwMzkxMC4zLjEuMTcwNTAwNTAyNy41My4wLjA.' }, 
    {title: 'Classic Kitchen Stool', author: 'Charles Durfee', description: 'This comfortable, well-proportioned stool is based on a basic Windsor form, with a thick plank seat and attached legs and back pieces. The seat is sculpted for comfort, and a curved low back gives support to the sitter. The legs are attached with wedged through-tenons, as are the lower stretchers. All the turned parts are shaped with a gentle swell and taper. The bent-laminated back is a bonus from classic Windsor construction, and adds a technique well worth learning to this project.', difficulty: 'medium' , video:'', planswebsite: 'https://finewoodworking.com/2023/04/10/build-a-classic-kitchen-stool' }, 
]

//plan_authors
const planAuthors = [
    { firstname: 'Charles', lastname: 'Durfee', bio: 'After a few years of cutting off the ends of 2x4s as a carpenter, Charles Durfee began working as a boatbuilder on the coast of Maine. Not liking the cold boat shops, he moved to even colder barns to make furniture and do finish carpentry. Several years later, he managed to upgrade to a nicely heated shop in Woolwich still near the coast, where he has built furniture and cabinets for the last 20 years.', experience: '20 years', isProfessional: true },
    { firstname: 'Rockler', lastname: 'Website', bio: 'An industry-leading woodworking and hardware source with a nationwide chain of stores and international reach through our catalogs and website. In many ways, a lot has changed. We have continuously added to our offerings as woodworking technologies have advanced, and we are constantly working to bring the industrys most innovative products, thinking and education to our stores and website.', experience: '70 years', isProfessional: true }
]

module.exports = { users, comments, plans, planAuthors }