// Help content for each app
export const HELP_CONTENT = {
    "velocity-track": {
        title: "Help & Support",
        appName: "VelocityTrack",
        supportEmail: "me@anwersolangi.com",
        description:
            "Find answers to common questions, troubleshooting tips, and ways to get in touch.",
        faqs: [
            {
                question: "How does VelocityTrack measure speed?",
                answer:
                    "VelocityTrack uses your device's GPS (Global Positioning System) to calculate your speed in real-time. The app determines your position multiple times per second and calculates the distance traveled to derive your current speed.",
            },
            {
                question:
                    "Why is my speed reading different from my car's speedometer?",
                answer:
                    "GPS speed and vehicle speedometers use different methods. Car speedometers often read slightly higher for safety margins. GPS speed is typically more accurate, but can be affected by signal quality. For legal purposes, always refer to your vehicle's speedometer.",
            },
            {
                question: "How accurate is the GPS speed?",
                answer:
                    "Under ideal conditions (clear sky, good satellite visibility), GPS speed accuracy is typically within 0.1-0.5 km/h. Accuracy decreases in tunnels, dense urban areas, or areas with poor satellite coverage.",
            },
            {
                question: "Does the app work offline?",
                answer:
                    "Yes! VelocityTrack works completely offline. GPS signals come directly from satellites, not the internet. However, the initial GPS lock may take longer without an internet connection for assisted GPS.",
            },
            {
                question: "How do I use HUD mode?",
                answer:
                    "Tap the HUD button to activate Heads-Up Display mode. The display will mirror so you can place your phone on your dashboard and see the speed reflected on your windshield. Works best at night or in low-light conditions.",
            },
            {
                question: "Why does my GPS take a long time to get a signal?",
                answer:
                    "Initial GPS lock can take 30 seconds to a few minutes, especially if you haven't used GPS recently or are in a new location. Moving outdoors with a clear view of the sky helps. Once locked, subsequent uses are much faster.",
            },
            {
                question: "How do I change speed units?",
                answer:
                    "Go to Settings in the app and select your preferred unit: km/h (kilometers per hour), mph (miles per hour), knots (nautical), or m/s (meters per second).",
            },
            {
                question: "What's included in VelocityTrack Pro?",
                answer:
                    "VelocityTrack Pro removes all advertisements and unlocks premium features including advanced trip statistics, data export, additional themes, and priority support.",
            },
            {
                question: "How do I restore my Pro purchase on a new device?",
                answer:
                    "Open VelocityTrack, go to Settings, and tap 'Restore Purchases'. Make sure you're signed in with the same Apple ID or Google account used for the original purchase.",
            },
            {
                question: "Does VelocityTrack drain my battery?",
                answer:
                    "GPS usage does consume battery. To minimize drain: lower screen brightness, use dark mode if available, and close the app when not in use. The app is optimized for efficiency, but continuous GPS use will affect battery life.",
            },
        ],
        troubleshooting: [
            {
                title: "No GPS Signal",
                icon: "📡",
                steps: [
                    "Ensure Location Services are enabled in device settings",
                    "Grant VelocityTrack permission to access your location",
                    "Move outdoors or to an area with clear sky visibility",
                    "Wait 30-60 seconds for GPS to acquire satellites",
                    "Restart the app if signal is still not acquired",
                ],
            },
            {
                title: "Inaccurate Speed Readings",
                icon: "⚠️",
                steps: [
                    "Check GPS signal strength indicator in the app",
                    "Move away from tall buildings, tunnels, or dense foliage",
                    "Ensure your phone case isn't blocking GPS antenna",
                    "Restart your device to refresh GPS hardware",
                    "Check if other GPS apps work correctly",
                ],
            },
            {
                title: "App Crashes or Freezes",
                icon: "🔄",
                steps: [
                    "Force close the app and reopen it",
                    "Ensure you have the latest app version installed",
                    "Restart your device",
                    "Check available storage space on your device",
                    "Reinstall the app if issues persist",
                ],
            },
            {
                title: "Subscription Issues",
                icon: "💳",
                steps: [
                    "Verify you're signed in with the correct App Store/Google account",
                    "Go to Settings > Restore Purchases",
                    "Check your subscription status in device settings",
                    "Contact Apple/Google support for billing issues",
                    "Email me if the issue persists after trying above steps",
                ],
            },
        ],
        contactOptions: [
            {
                title: "Report a Bug",
                description:
                    "Found something not working correctly? Let me know!",
                icon: "🐛",
                subject: "VelocityTrack Bug Report",
                body: "Hi,\n\nI found a bug in VelocityTrack:\n\nDevice: [Your device model]\niOS/Android Version: [Your version]\nApp Version: [App version]\n\nBug Description:\n[Describe the bug here]\n\nSteps to Reproduce:\n1. \n2. \n3. \n\nExpected Behavior:\n[What should happen]\n\nActual Behavior:\n[What actually happens]\n\nThank you!",
            },
            {
                title: "Feature Request",
                description: "Have an idea to make VelocityTrack better?",
                icon: "💡",
                subject: "VelocityTrack Feature Request",
                body: "Hi,\n\nI have a feature suggestion for VelocityTrack:\n\nFeature Description:\n[Describe your idea here]\n\nWhy this would be useful:\n[Explain the benefit]\n\nThank you!",
            },
            {
                title: "General Inquiry",
                description: "Questions, feedback, or just want to say hi?",
                icon: "💬",
                subject: "VelocityTrack Inquiry",
                body: "Hi,\n\nI have a question about VelocityTrack:\n\n[Your message here]\n\nThank you!",
            },
            {
                title: "Subscription Support",
                description: "Issues with Pro subscription or purchases?",
                icon: "⭐",
                subject: "VelocityTrack Pro Support",
                body: "Hi,\n\nI need help with my VelocityTrack Pro subscription:\n\nDevice: [Your device model]\nPurchase Platform: [App Store / Google Play]\nPurchase Date: [Approximate date]\n\nIssue:\n[Describe your issue]\n\nThank you!",
            },
        ],
    },
};
