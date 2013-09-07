<?php

/**
 * @file
 * This template handles the layout of the views exposed filter form.
 *
 * Variables available:
 * - $widgets: An array of exposed form widgets. Each widget contains:
 * - $widget->label: The visible label to print. May be optional.
 * - $widget->operator: The operator for the widget. May be optional.
 * - $widget->widget: The widget itself.
 * - $sort_by: The select box to sort the view using an exposed form.
 * - $sort_order: The select box with the ASC, DESC options to define order. May be optional.
 * - $items_per_page: The select box with the available items per page. May be optional.
 * - $offset: A textfield to define the offset of the view. May be optional.
 * - $reset_button: A button to reset the exposed filter applied. May be optional.
 * - $button: The submit button for the form.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($q)): ?>
  <?php
    // This ensures that, if clean URLs are off, the 'q' is added first so that
    // it shows up first in the URL.
    print $q;
  ?>
<?php endif; ?>
<div class="views-exposed-form customFilter">
  <div class="views-exposed-widgets clearfix">
  	<?php $counter = 1; ?>
    <?php foreach ($widgets as $id => $widget): ?>
    
    <?php  
    if ($counter == 1) {
    	$classGroup = "filterGroup-1";
    } elseif ($counter == 5) {
    	$classGroup = "filterGroup-2";
    } elseif ($counter == 9) {
    	$classGroup = "filterGroup-3";
    } elseif ($counter == 13) {
    	$classGroup = "filterGroup-4";
    } elseif ($counter == 17) {
    	$classGroup = "filterGroup-5";
    }
    
    if ($counter == 1 || $counter == 5 || $counter == 9 || $counter == 13 || $counter == 17) {
    	echo "<div class='".$classGroup."'>";
    }
    ?>
    
      <div id="<?php print $widget->id; ?>-wrapper" class="views-exposed-widget views-widget-<?php print $id; ?>">
        <?php if (!empty($widget->label)): ?>
          <div class="<?php print $widget->id; ?>">
			  <label for="<?php print $widget->id; ?>">
			  		<?php
					$toolTipURL = strtolower($widget->label);
					$toolTipURL = preg_replace("/[^A-Za-z0-9 ]/", '', $toolTipURL);
					$toolTipURL = str_replace(" ", "-", $toolTipURL);
					$toolTipURL .= '?width=300&height=400&iframe=true';
					?>
<!--				    <?php if (!empty($widget->description)): ?><a class="alhToolTip" href="<?php echo 'http://biz104.inmotionhosting.com/~accura30/help/'.$toolTipURL; ?>"><?php print $widget->description; ?></a><?php endif; ?>-->
				    <?php if (!empty($widget->description)): ?><a class="colorbox-load" href="<?php echo 'http://biz104.inmotionhosting.com/~accura30/help/'.$toolTipURL; ?>"><?php print $widget->description; ?></a><?php endif; ?>
					<?php print $widget->label; ?>
			  </label>
		  </div>
      <!-- 
    <?php if (!empty($widget->description)): ?>
          <div class="description">
            <?php print $widget->description; ?>
          </div>
         <?php endif; ?>
 -->
        <?php endif; ?>
        
        <?php if (!empty($widget->operator)): ?>
          <div class="views-operator">
            <?php print $widget->operator; ?>
          </div>
        <?php endif; ?>
        <div class="views-widget">
          <?php print $widget->widget; ?>
        </div>
      </div>
      
       <?php
    	if ($counter == 4 || $counter == 8 || $counter == 12 || $counter == 16 || $counter == 20) {
    		echo "</div>";
   	 	}
   	 	$counter++;
    	?>
    <?php endforeach; ?>
    
    </div>

    <?php if (!empty($sort_by)): ?>
      <div class="views-exposed-widget views-widget-sort-by">
        <?php print $sort_by; ?>
      </div>
      <div class="views-exposed-widget views-widget-sort-order">
        <?php print $sort_order; ?>
      </div>
    <?php endif; ?>
    <?php if (!empty($items_per_page)): ?>
      <div class="views-exposed-widget views-widget-per-page">
        <?php print $items_per_page; ?>
      </div>
    <?php endif; ?>
    <?php if (!empty($offset)): ?>
      <div class="views-exposed-widget views-widget-offset">
        <?php print $offset; ?>
      </div>
    <?php endif; ?>
    <div class="views-exposed-widget views-submit-button">
      <?php print $button; ?>
    </div>
    <?php if (!empty($reset_button)): ?>
      <div class="views-exposed-widget views-reset-button">
        <?php print $reset_button; ?>
      </div>
    <?php endif; ?>
  </div>
</div>
