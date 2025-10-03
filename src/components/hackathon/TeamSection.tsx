import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Alex Johnson",
      role: "Mission Commander",
      avatar: "/placeholder.svg",
      bio: "Leading the team with 10+ years of experience in aerospace engineering and space mission planning. Passionate about making space exploration accessible to everyone.",
      github: "alexjohnson",
      linkedin: "alexjohnson",
      twitter: "alexjohnson",
      email: "alex@spacehackathon.com",
    },
    {
      name: "Sarah Chen",
      role: "Data Scientist",
      avatar: "/placeholder.svg",
      bio: "Expert in analyzing astronomical data and creating AI models for space exploration. PhD in Astrophysics with focus on planetary systems.",
      github: "sarahchen",
      linkedin: "sarahchen",
      twitter: "sarahchen",
      email: "sarah@spacehackathon.com",
    },
    {
      name: "Marcus Williams",
      role: "Frontend Engineer",
      avatar: "/placeholder.svg",
      bio: "Crafting beautiful and intuitive interfaces for space exploration. Specializes in 3D visualizations and interactive experiences using React and Three.js.",
      github: "marcuswilliams",
      linkedin: "marcuswilliams",
      twitter: "marcuswilliams",
      email: "marcus@spacehackathon.com",
    },
    {
      name: "Priya Patel",
      role: "Backend Engineer",
      avatar: "/placeholder.svg",
      bio: "Building robust APIs and managing data infrastructure for NASA missions. Expert in cloud architecture and real-time data processing.",
      github: "priyapatel",
      linkedin: "priyapatel",
      twitter: "priyapatel",
      email: "priya@spacehackathon.com",
    },
    {
      name: "David Kim",
      role: "UX/UI Designer",
      avatar: "/placeholder.svg",
      bio: "Designing experiences that make space exploration engaging and educational. Background in game design and interactive storytelling.",
      github: "davidkim",
      linkedin: "davidkim",
      twitter: "davidkim",
      email: "david@spacehackathon.com",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Meet Our Team 👨‍🚀👩‍🚀
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The stellar crew behind this cosmic mission
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="cursor-pointer"
            onClick={() => setSelectedMember(member)}
          >
            <Card className="h-full border-2 border-primary/30 bg-card/10 backdrop-blur-md transition-all hover:shadow-[0_0_40px_hsl(var(--primary)/0.6),0_0_80px_hsl(var(--accent)/0.3)] hover:border-accent/50 hover:bg-card/20" style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.2), inset 0 0 20px hsl(var(--primary) / 0.05)' }}>
              <CardHeader className="text-center">
                <motion.div
                  className="mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Avatar className="w-24 h-24 border-4 border-primary/30 ring-4 ring-primary/10">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </motion.div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-accent">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center gap-2">
                  {member.github && (
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-primary/20 hover:text-primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(`https://github.com/${member.github}`, '_blank');
                        }}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  )}
                  {member.linkedin && (
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-primary/20 hover:text-primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(`https://linkedin.com/in/${member.linkedin}`, '_blank');
                        }}
                      >
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  )}
                  {member.twitter && (
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-primary/20 hover:text-primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(`https://twitter.com/${member.twitter}`, '_blank');
                        }}
                      >
                        <Twitter className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  )}
                  {member.email && (
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-primary/20 hover:text-primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = `mailto:${member.email}`;
                        }}
                      >
                        <Mail className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Member Detail Dialog */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="sm:max-w-[600px] border-2 border-primary/30 bg-card/95 backdrop-blur-xl">
          {selectedMember && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-20 h-20 border-4 border-primary/30 ring-4 ring-primary/10">
                    <AvatarImage src={selectedMember.avatar} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                      {selectedMember.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <DialogTitle className="text-2xl">{selectedMember.name}</DialogTitle>
                    <DialogDescription className="text-lg text-accent">
                      {selectedMember.role}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-sm leading-relaxed">{selectedMember.bio}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Connect</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedMember.github && (
                      <Button
                        variant="outline"
                        className="gap-2"
                        onClick={() => window.open(`https://github.com/${selectedMember.github}`, '_blank')}
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </Button>
                    )}
                    {selectedMember.linkedin && (
                      <Button
                        variant="outline"
                        className="gap-2"
                        onClick={() => window.open(`https://linkedin.com/in/${selectedMember.linkedin}`, '_blank')}
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </Button>
                    )}
                    {selectedMember.twitter && (
                      <Button
                        variant="outline"
                        className="gap-2"
                        onClick={() => window.open(`https://twitter.com/${selectedMember.twitter}`, '_blank')}
                      >
                        <Twitter className="w-4 h-4" />
                        Twitter
                      </Button>
                    )}
                    {selectedMember.email && (
                      <Button
                        variant="outline"
                        className="gap-2"
                        onClick={() => window.location.href = `mailto:${selectedMember.email}`}
                      >
                        <Mail className="w-4 h-4" />
                        Email
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TeamSection;
