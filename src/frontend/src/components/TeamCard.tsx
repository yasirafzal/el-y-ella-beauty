import type { TeamMember } from "@/types";

interface TeamCardProps {
  member: TeamMember;
  index?: number;
}

export function TeamCard({ member, index = 0 }: TeamCardProps) {
  return (
    <div
      className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lift transition-smooth"
      data-ocid={`team.item.${index + 1}`}
    >
      {/* Avatar */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Specialties on hover */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-wrap gap-1">
          {member.specialties.map((specialty) => (
            <span
              key={specialty}
              className="text-[10px] bg-primary-foreground/90 text-primary font-body font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-display text-xl italic text-foreground mb-0.5">
          {member.name}
        </h3>
        <p className="text-xs font-body font-bold uppercase tracking-widest text-primary mb-3">
          {member.role}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {member.bio}
        </p>
      </div>
    </div>
  );
}
