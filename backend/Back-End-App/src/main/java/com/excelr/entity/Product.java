package com.excelr.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(length = 500)
    private String description;

    private Double price;
    private Double originalPrice;    // e.g., ₹650
    private Integer discountPercent; // e.g., 30
    private Double rating;           // e.g., 4.9
    private String units;            // e.g., "2 Units"
    private String imageUrl;
    private String category;

    // ---------- CONSTRUCTORS ----------
    public Product() {}

    public Product(String name, String description, Double price, Double originalPrice,
                   Integer discountPercent, Double rating, String units,
                   String imageUrl, String category) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.originalPrice = originalPrice;
        this.discountPercent = discountPercent;
        this.rating = rating;
        this.units = units;
        this.imageUrl = imageUrl;
        this.category = category;
    }

    // ---------- GETTERS & SETTERS ----------
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getOriginalPrice() {
        return originalPrice;
    }

    public void setOriginalPrice(Double originalPrice) {
        this.originalPrice = originalPrice;
    }

    public Integer getDiscountPercent() {
        return discountPercent;
    }

    public void setDiscountPercent(Integer discountPercent) {
        this.discountPercent = discountPercent;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public String getUnits() {
        return units;
    }

    public void setUnits(String units) {
        this.units = units;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}

