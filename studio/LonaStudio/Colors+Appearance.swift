//
//  Colors+Appearance.swift
//  LonaStudio
//
//  Created by Devin Abbott on 1/3/19.
//  Copyright © 2019 Devin Abbott. All rights reserved.
//

import AppKit

extension Colors {
    public static let textColor = NSColor(named: "textColor")!

    public static let mutedTextColor = NSColor(named: "textColor")!.withAlphaComponent(0.7)

    public static let labelText = NSColor(named: "labelTextColor")!

    public static let windowBackground = NSColor(named: "windowBackgroundColor")!

    public static let headerBackground = NSColor(named: "headerBackgroundColor")!

    public static let controlBackground = NSColor(named: "controlBackgroundColor")!

    public static let dividerSubtle = NSColor(named: "dividerSubtleColor")!

    public static let contentHeaderBackground: NSColor = {
        if #available(OSX 10.14, *) {
            switch NSApp.effectiveAppearance.bestMatch(from: [.aqua, .darkAqua]) {
            case .some(.darkAqua):
                return NSColor.controlBackgroundColor
            default:
                return NSColor.white
            }
        } else {
            return NSColor.white
        }
    }()

    public static let contentBackground: NSColor = {
        if #available(OSX 10.14, *) {
            switch NSApp.effectiveAppearance.bestMatch(from: [.aqua, .darkAqua]) {
            case .some(.darkAqua):
                return NSColor.controlBackgroundColor
            default:
                return NSColor.white
            }
        } else {
            return NSColor.white
        }
    }()

    public static let divider: NSColor = {
        return NSSplitView.defaultDividerColor
    }()

    public static let iconFill: NSColor = {
        if #available(OSX 10.14, *) {
            switch NSApp.effectiveAppearance.bestMatch(from: [.aqua, .darkAqua]) {
            case .some(.darkAqua):
                return NSColor.parse(css: "#D8D8D8")!
            default:
                return NSColor.black.withAlphaComponent(0.3)
            }
        } else {
            return NSColor.black.withAlphaComponent(0.3)
        }
    }()

    public static let iconFillAccent: NSColor = {
        if #available(OSX 10.14, *) {
            switch NSApp.effectiveAppearance.bestMatch(from: [.aqua, .darkAqua]) {
            case .some(.darkAqua):
                return NSColor.parse(css: "#9B9B9B")!
            default:
                return Colors.contentBackground.withAlphaComponent(0.70)
            }
        } else {
            return Colors.contentBackground.withAlphaComponent(0.70)
        }
    }()
}
