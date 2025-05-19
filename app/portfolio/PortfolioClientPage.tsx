// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// // import { Dialog, DialogContent } from "@/components/ui/dialog"
// import { Play } from "lucide-react"

// export default function PortfolioClientPage() {
//   const [activeFilter, setActiveFilter] = useState("all")
//   const [selectedItem, setSelectedItem] = useState(null)

//   const filters = [
//     // { id: "all", label: "All" },
//     // { id: "video", label: "Video" },
//     // { id: "photo", label: "Photo" },
//     // { id: "design", label: "Design" },
//     // { id: "social", label: "Social Media" },
//   ]

//   const portfolioItems = [
//     {
//       id: 1,
//       title: "Brand Video",
//       category: "video",
//       image: "/dc.png?height=600&width=800",
//       client: "Dc_rcoem",
//       description: "A promotional video campaign showcasing the latest collection for a fashion brand.",
//       videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     },
//     {
//       id: 2,
//       title: "Product Photography",
//       category: "photo",
//       image: "/gym.png?height=600&width=800",
//       client: "Tech Innovations Inc.",
//       description: "High-quality product photography for a new tech gadget launch.",
//     },
//     {
//       id: 3,
//       title: "Social Media Campaign",
//       category: "social",
//       image: "/placeholder.svg?height=600&width=800",
//       client: "Lifestyle Blog",
//       description: "A comprehensive social media campaign to increase brand awareness and engagement.",
//     },
//     {
//       id: 4,
//       title: "Corporate Event Coverage",
//       category: "video",
//       image: "/placeholder.svg?height=600&width=800",
//       client: "Event Management Co.",
//       description: "Full video coverage of a corporate event, including interviews and highlights.",
//       videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     },
//     {
//       id: 5,
//       title: "Fashion Photoshoot",
//       category: "photo",
//       image: "/placeholder.svg?height=600&width=800",
//       client: "Fashion Magazine",
//       description: "A creative fashion photoshoot for a magazine's summer edition.",
//     },
//     {
//       id: 6,
//       title: "Brand Identity Design",
//       category: "design",
//       image: "/placeholder.svg?height=600&width=800",
//       client: "Startup Company",
//       description: "Complete brand identity design including logo, color palette, and brand guidelines.",
//     },
//     {
//       id: 7,
//       title: "Restaurant Menu Photography",
//       category: "photo",
//       image: "/placeholder.svg?height=600&width=800",
//       client: "Gourmet Restaurant",
//       description: "Food photography for a restaurant's new menu and website.",
//     },
//     {
//       id: 8,
//       title: "Social Media Content Creation",
//       category: "social",
//       image: "/placeholder.svg?height=600&width=800",
//       client: "Retail Brand",
//       description: "Ongoing content creation for multiple social media platforms to boost engagement.",
//     },
//     {
//       id: 9,
//       title: "Product Launch Video",
//       category: "video",
//       image: "/placeholder.svg?height=600&width=800",
//       client: "Tech Company",
//       description: "An exciting product launch video showcasing features and benefits.",
//       videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     },
//     {
//       id: 10,
//       title: "Website Redesign",
//       category: "design",
//       image: "/placeholder.svg?height=600&width=800",
//       client: "E-commerce Platform",
//       description: "Complete website redesign focusing on user experience and conversion optimization.",
//     },
//     {
//       id: 11,
//       title: "Corporate Portraits",
//       category: "photo",
//       image: "/placeholder.svg?height=600&width=800",
//       client: "Law Firm",
//       description: "Professional portrait photography for a law firm's team members.",
//     },
//     {
//       id: 12,
//       title: "Instagram Strategy",
//       category: "social",
//       image: "/placeholder.svg?height=600&width=800",
//       client: "Influencer",
//       description: "Comprehensive Instagram strategy to grow followers and increase engagement.",
//     },
//   ]

//   const filteredItems =
//     activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

//   return (
//     <div className="flex flex-col bg-black text-white">
//       {/* Hero Section */}
//       <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-zinc-900">
//         <div className="container mx-auto px-4 text-center">
//           <Badge variant="outline" className="px-3 py-1 mb-4 border-cyan-500 text-cyan-400">
//             Our Portfolio
//           </Badge>
//           <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Our Creative Work</h1>
//           <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
//             Explore our latest projects and see how we've helped our clients achieve their creative goals.
//           </p>
//         </div>
//       </section>

//       {/* Portfolio Gallery */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-center gap-2 mb-12">
//             {/* {filters.map((filter) => (
//               <Button
//                 key={filter.id}
//                 variant={activeFilter === filter.id ? "default" : "outline"}
//                 size="sm"
//                 onClick={() => setActiveFilter(filter.id)}
//                 className={`min-w-[80px] ${
//                   activeFilter === filter.id
//                     ? "bg-gradient-1 hover:bg-cyan-600 text-white"
//                     : "border-zinc-700 text-zinc-400 hover:text-white hover:border-cyan-500"
//                 }`}
//               >
//                 {filter.label}
//               </Button>
//             ))} */}
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="group overflow-hidden rounded-lg cursor-pointer"
//                 // onClick={() => setSelectedItem(item)}
//               >
//                 <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
//                   <Image
//                     src={item.image || "/placeholder.svg"}
//                     alt={item.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   {item.category === "video" && (
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="rounded-full bg-black/50 p-3 text-white">
//                         <Play className="h-8 w-8 fill-white" />
//                       </div>
//                     </div>
//                   )}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
//                     <div className="p-4 w-full">
//                       <h3 className="text-white font-medium text-lg">{item.title}</h3>
//                       <p className="text-zinc-300 text-sm mt-1">Client: {item.client}</p>
//                       <Badge variant="outline" className="mt-2 text-cyan-400 border-cyan-500/50">
//                         {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
//                       </Badge>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Project Detail Dialog */}
//           {/* {selectedItem && (
//             <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
//               <DialogContent className="max-w-4xl p-0 overflow-hidden bg-zinc-900 border-zinc-800">
//                 <div className="grid grid-cols-1 md:grid-cols-2">
//                   <div className="relative aspect-square md:aspect-auto">
//                     {selectedItem.category === "video" && selectedItem.videoUrl ? (
//                       <iframe
//                         width="100%"
//                         height="100%"
//                         src={selectedItem.videoUrl}
//                         title={selectedItem.title}
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                         className="absolute inset-0"
//                       ></iframe>
//                     ) : (
//                       <Image
//                         src={selectedItem.image || "/placeholder.svg"}
//                         alt={selectedItem.title}
//                         fill
//                         className="object-cover"
//                       />
//                     )}
//                   </div>
//                   <div className="p-6 space-y-4">
//                     <Badge className="bg-gradient-1 text-white">
//                       {selectedItem.category.charAt(0).toUpperCase() + selectedItem.category.slice(1)}
//                     </Badge>
//                     <h2 className="text-2xl font-bold text-white">{selectedItem.title}</h2>
//                     <p className="text-zinc-400">{selectedItem.description}</p>
//                     <div className="pt-4">
//                       <h3 className="font-medium mb-2 text-white">Client</h3>
//                       <p className="text-zinc-300">{selectedItem.client}</p>
//                     </div>
//                     <Button
//                       className="mt-6 bg-gradient-1 hover:bg-cyan-600 text-white"
//                       onClick={() => setSelectedItem(null)}
//                     >
//                       Close
//                     </Button>
//                   </div>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           )} */}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 md:py-24 bg-gradient-2">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
//             Ready to Start Your Project?
//           </h2>
//           <p className="text-pink-100 text-lg max-w-2xl mx-auto mb-8">
//             Let's collaborate to bring your creative vision to life. Contact us today for a free consultation.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <Button asChild size="lg" className="bg-white text-pink-600 hover:bg-pink-100">
//               <Link href="/contact">Get a Quote</Link>
//             </Button>
//             <Button
//               asChild
//               size="lg"
//               variant="outline"
//               className="bg-transparent border-white text-white hover:bg-white/10"
//             >
//               <Link href="/services">Explore Our Services</Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
