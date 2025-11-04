import React, {Component} from 'react';
import { Card, CardContent } from "@/components/ui/card";


class MySkills extends Component {
    render() {
        return (
            <div className="mb-20 flex justify-center flex-col">
                <h3 className="text-3xl font-bold text-text-primary text-center mb-12 title3">
                    Mes Compétences
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    {skills.map((skills, index) => {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        const Icon = skill.icon;

                        return (
                            <Card
                                key={index}
                                className="bg-gradient-card border-border-light hover:border-primary/50 transition-smooth shadow-card hover:shadow-glow group"
                            >
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-primary">
                                        <Icon className="w-8 h-8 text-primary-foreground" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-text-primary mb-3 title3">
                                        {skill.name}
                                    </h4>

                                    {/* Progress bar */}
                                    <div className="w-full bg-secondary rounded-full h-2 mb-2">
                                        <div
                                            className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                    <span className="text-text-secondary text-sm">
                        {skill.level}%
                      </span>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>

        );
    }
}

export default MySkills;